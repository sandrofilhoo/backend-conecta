const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PercentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  optionDiscount: {
    type: String,
    required: true,
  },
  timeDiscount: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
  },
});

PercentSchema.plugin(mongoosePaginate);

mongoose.model("Percent", PercentSchema);
