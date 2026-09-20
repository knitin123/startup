const express = require("express");
const router = express.Router();

const ADMIN_EMAIL = "admin@gaonkimakki.com";
const ADMIN_PASS = "admin123";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
