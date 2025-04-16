const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /api/products/verify/:qrCode
router.get("/verify/:qrCode", async (req, res) => {
  try {
    const { qrCode } = req.params;
    const product = await Product.findOne({ qrCodeData: qrCode });

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found (invalid QR code)" });
    }

    return res.status(200).json({ success: true, data: product });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server Error", error: err.message });
  }
});

module.exports = router;
