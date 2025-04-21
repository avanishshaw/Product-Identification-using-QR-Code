const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add product route
router.post('/add', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get product by QR code data route
router.get("/:qrCodeData", async (req, res) => {
  try {
    const product = await Product.findOne({ qrCodeData: req.params.qrCodeData });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

