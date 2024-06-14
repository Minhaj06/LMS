import React from "react";
import { Card, Button } from "antd";
import { format } from "date-fns";
import { AiTwotoneEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const CourseCard = ({ course }) => {
  return (
    <Card
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative"
      cover={
        <img alt="course cover" src={course?.photo} className="object-cover h-48 w-full" />
      }
    >
      <div className="p-2 absolute top-0 right-0 flex gap-2">
        <AiTwotoneEdit role="button" size={20} className="text-yellow-600" />
        <FiTrash2 role="button" size={20} className="text-red-600" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-700 text-base mb-4">{course.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">${course.price}</div>
          <div className="text-sm text-gray-600">
            {format(new Date(course.createdAt), "MMM dd, yyyy")}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button type="primary">Enroll Now</Button>
          <div className="text-sm text-gray-600">By {course.instructor.name}</div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
