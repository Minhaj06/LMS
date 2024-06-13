import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";

const RegisterPage = () => {
  const { createUser, updateUser, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onFinish = async (values) => {
    const { name, email, password } = values;

    try {
      loading(true);
      const userCredential = await createUser(email, password);
      const firebaseUid = userCredential.user.uid;

      await updateUser(name);

      const { data } = await axios.post("/users", {
        firebaseUid,
        name,
        email,
      });

      loading(false);
      navigate(from, { replace: true });
      notification.success({
        message: "Registration Successful",
        description: "You have successfully registered.",
      });
    } catch (error) {
      loading(false);
      notification.error({
        message: error.message,
        description: "Please try again.",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
          </Form.Item>
          <div className="text-center">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
