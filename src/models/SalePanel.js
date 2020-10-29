const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const SalePanelSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

SalePanelSchema.plugin(mongoosePaginate);

mongoose.model("SalePanel", SalePanelSchema);
