const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
