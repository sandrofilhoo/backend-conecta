const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const TableSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  order: {
    type: Object,
    required: false,
  },
});

TableSchema.plugin(mongoosePaginate);

mongoose.model("Table", TableSchema);
