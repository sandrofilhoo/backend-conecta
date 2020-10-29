const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ConfigSchema = new mongoose.Schema({
  style: {
    type: Boolean,
    default: false,
  },
  commission: {
    type: Boolean,
    default: false,
  },
  alertlimit: {
    type: Number,
    default: 10,
  },
  notification_1: {
    type: Boolean,
    default: false,
  },
  notification_2: {
    type: Boolean,
    default: false,
  },
});

ConfigSchema.plugin(mongoosePaginate);

mongoose.model("Config", ConfigSchema);
