const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nameSale: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
});

OrderSchema.plugin(mongoosePaginate);

mongoose.model("Order", OrderSchema);
