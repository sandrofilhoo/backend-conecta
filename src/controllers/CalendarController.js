const mongoose = require("mongoose");

const Calendar = mongoose.model("Calendar");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const calendars = await Calendar.find();
    return res.json(calendars);
  },
  async show(req, res) {
    const calendar = await Calendar.findById(req.params.id);
    return res.status(200).json(calendar);
  },
  async store(req, res) {
    const calendar = await Calendar.create(req.body);
    return res.status(200).json(calendar);
  },
  async update(req, res) {
    const calendar = await Calendar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(calendar);
  },
  async destroy(req, res) {
    const calendar = await Calendar.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
