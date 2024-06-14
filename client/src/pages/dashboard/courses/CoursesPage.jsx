import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../../../components/cards/CourseCard";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/courses");
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course?._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
