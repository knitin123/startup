const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Add product (admin)
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// DELETE product by id
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});


module.exports = router;
