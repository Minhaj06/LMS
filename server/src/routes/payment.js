const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const { createPayment } = require("../controllers/payment");

router.use(auth);

router.post("/payments", createPayment);

module.exports = router;
