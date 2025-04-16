const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  sellerId: String,
  name: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model('Seller', sellerSchema);
