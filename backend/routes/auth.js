const express = require("express");
const router = express.Router();
const Otp = require("../models/Otp");

/**
 * 🔐 ADMIN ALLOWLIST (HARDCODE + ENV OVERRIDE)
 * Priority:
 * 1. process.env.ADMIN_PHONES (if available)
 * 2. fallback hardcoded number (FOUNDER SAFETY)
 */
const ADMIN_PHONES = (
  process.env.ADMIN_PHONES || "7440290201" // 👈 APNA NUMBER YAHAN DAALO
)
  .split(",")
  .map((p) => p.trim());

// helper
const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

/**
 * POST /api/auth/send-otp
 */
router.post("/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;

    console.log("ADMIN_PHONES:", ADMIN_PHONES);
    console.log("PHONE ENTERED:", phone);

    if (!phone) {
      return res.status(400).json({ message: "Phone required" });
    }

    // 🔐 FINAL AUTHORISATION CHECK
    if (!ADMIN_PHONES.includes(phone.trim())) {
      return res.status(403).json({
        message: "Access denied. Not an admin number.",
      });
    }

    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    await Otp.deleteMany({ phone });
    await Otp.create({ phone, otp, expiresAt });

    console.log(`🔐 ADMIN OTP for ${phone}: ${otp}`);

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Send OTP error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * POST /api/auth/verify-otp
 */
router.post("/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone and OTP required" });
    }

    const record = await Otp.findOne({ phone, otp });

    if (!record) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

    if (record.expiresAt < new Date()) {
      await Otp.deleteMany({ phone });
      return res.status(401).json({ message: "OTP expired" });
    }

    await Otp.deleteMany({ phone });

    res.json({
      message: "OTP verified successfully",
      isAdmin: true,
    });
  } catch (err) {
    console.error("Verify OTP error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
