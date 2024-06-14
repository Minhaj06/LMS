const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/users", createUser);
router.get("/user/:email", auth, getUser);

module.exports = router;
