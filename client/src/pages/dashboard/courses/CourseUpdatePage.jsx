import React, { useContext, useEffect } from "react";
import { Form, Input, Button, InputNumber, notification } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/auth";

const CourseUpdatePage = () => {
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      loading(true);
      try {
        const { data } = await axios.get(`/courses/${id}`);
        form.setFieldsValue(data);
      } catch (error) {
        console.log(error);
      } finally {
        loading(false);
      }
    })();
  }, [id]);

  const onFinish = async (values) => {
    loading(true);
    try {
      const { data } = await axios.put(`/courses/${id}`, { ...values });
      form.resetFields();
      notification.success({
        message: "Course Updated",
        description: "The course has been updated successfully.",
      });
      navigate("/dashboard/courses");
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an error upating the course. Please try again.",
      });
      console.error("Error updating course:", error);
    } finally {
      loading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <h2 className="text-2xl mb-4 text-center">Create Course</h2>
        <Form form={form} name="create_course" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the course title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input the course description!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the course price!" }]}
          >
            <InputNumber min={0} className="w-full" />
          </Form.Item>

          <Form.Item
            label="Photo URL"
            name="photo"
            rules={[{ required: true, message: "Please input the course title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Update Course
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CourseUpdatePage;
