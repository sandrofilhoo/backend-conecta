const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

MenuSchema.plugin(mongoosePaginate);

mongoose.model("Menu", MenuSchema);
