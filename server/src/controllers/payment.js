const Payment = require("../models/Payment");
const Course = require("../models/Course");
const stripe = require("stripe")(process.env.StripeSecret);

exports.createPayment = async (req, res) => {
  const { courseId, token } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const charge = await stripe.charges.create({
      amount: course.price * 100,
      currency: "usd",
      source: token,
      description: `Payment for course: ${course.title}`,
    });

    const payment = new Payment({
      user: req.user.uid,
      course: courseId,
      amount: course.price,
      paymentStatus: "completed",
    });
    await payment.save();

    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
