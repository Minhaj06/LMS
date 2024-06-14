const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../controllers/course");

router.use(auth);

router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.post("/courses", addCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);

module.exports = router;
