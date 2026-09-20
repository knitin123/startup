const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// ✅ POST: Create new lead (Farmer / Agent)
router.post("/", async (req, res) => {
  try {
    const { name, phone, location, crop, quantity } = req.body;

    if (!name || !phone || !location || !quantity) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    const lead = new Lead({
      name,
      phone,
      location,
      crop,
      quantity,
    });

    await lead.save();

    res.status(201).json({
      message: "Lead submitted successfully",
      lead,
    });
  } catch (err) {
    console.error("Lead save error:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// ✅ GET: Fetch all leads (Admin / Founder use)
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error("Lead fetch error:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// PATCH: Update lead status
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ["New", "Contacted", "Deal Done", "Rejected"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
