const Course = require("../models/course");
const User = require("../models/user");

exports.getCourses = async (req, res) => {
  const email = req?.user?.email;
  try {
    const user = await User.findOne({ email: email });

    const courses = await Course.find({ instructor: user?._id }).populate("instructor");
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addCourse = async (req, res) => {
  const { title, description, price, photo } = req.body;
  const email = req?.user?.email;
  try {
    const user = await User.findOne({ email: email });

    const existingCourse = await Course.findOne({ title, instructor: user?._id });
    if (existingCourse) {
      return res
        .status(409)
        .json({ message: "Course with this title already exists for the instructor" });
    }

    const course = new Course({
      title,
      description,
      price,
      photo,
      instructor: user?._id,
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;

  try {
    const course = await Course.findOneAndUpdate(
      { _id: id, instructor: req.user.uid },
      { title, description, price },
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ email: req?.user?.email });

  try {
    const course = await Course.findOneAndDelete({ _id: id, instructor: user?._id });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
