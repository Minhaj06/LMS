import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, InputNumber, notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/auth";

const CourseCreatePage = () => {
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    loading(true);
    try {
      const { data } = await axios.post("/courses", { ...values });
      form.resetFields();
      notification.success({
        message: "Course Created",
        description: "The course has been created successfully.",
      });
      navigate("/dashboard/courses");
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an error creating the course. Please try again.",
      });
      console.error("Error creating course:", error);
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
              Create Course
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CourseCreatePage;
