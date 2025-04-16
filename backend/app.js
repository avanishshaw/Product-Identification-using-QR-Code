const Product = require("./models/Product");
const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/api/products/add', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  });

app.get("/api/products/:qrCodeData", async (req, res) => {
    const product = await Product.findOne({ qrCodeData: req.params.qrCodeData });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});
