const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
  sorting: { type: Number, default: 0 }
});

module.exports = model('Product', ProductSchema);