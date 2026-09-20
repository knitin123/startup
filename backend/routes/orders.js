const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// CREATE ORDER (Customer)
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ message: "Order failed" });
  }
});

// GET ALL ORDERS (Admin)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// ✅ UPDATE ORDER STATUS (Admin)
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (err) {
    console.error("Status update error:", err);
    res.status(500).json({ message: "Status update failed" });
  }
});

module.exports = router;
