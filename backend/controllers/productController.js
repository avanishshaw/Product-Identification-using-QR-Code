const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProductByQR = async (req, res) => {
  const { qr } = req.params;
  const product = await Product.findOne({ qrCodeData: qr });
  res.json(product);
};
