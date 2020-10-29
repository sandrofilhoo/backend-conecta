const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CalendarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CalendarSchema.plugin(mongoosePaginate);

mongoose.model("Calendar", CalendarSchema);
