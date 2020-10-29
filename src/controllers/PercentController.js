const mongoose = require("mongoose");

const Percent = mongoose.model("Percent");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const percents = await Percent.find();
    return res.json(percents);
  },
  async show(req, res) {
    const percent = await Percent.findById(req.params.id);
    return res.status(200).json(percent);
  },
  async store(req, res) {
    const percent = await Percent.create(req.body);
    return res.status(200).json(percent);
  },
  async update(req, res) {
    const percent = await Percent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(percent);
  },
  async destroy(req, res) {
    const percent = await Percent.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
