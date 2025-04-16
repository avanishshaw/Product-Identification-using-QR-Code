const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: String,
  name: String,
  manufacturer: String,
  manufactureDate: String,
  expiryDate: String,
  qrCodeData: String,
  owner: String,
});

module.exports = mongoose.model('Product', productSchema);
