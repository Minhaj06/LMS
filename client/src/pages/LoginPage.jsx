import React, { useContext } from "react";
import { Form, Input, Button, notification } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const LoginPage = () => {
  const { logIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { email, password } = values;

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        loading(false);
        notification.success({
          message: "Login Successful",
          description: "You have successfully logged in.",
        });
        form.resetFields();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        loading(false);
        notification.error({
          message: "Login Error",
          description: "Invalid credentials. Please try again.",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
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
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
          <div className="text-center">
            <Link to="/register">Don't have an account? Register</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
