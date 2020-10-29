const mongoose = require("mongoose");

const Config = mongoose.model("Config");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const configs = await Config.find();
    return res.json(configs);
  },
  async show(req, res) {
    const config = await Config.findById(req.params.id);
    return res.status(200).json(config);
  },
  async store(req, res) {
    try {
      const config = await Config.create(req.body);
      return res.status(200).json(config);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const config = await Config.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(config);
  },
  async destroy(req, res) {
    const config = await Config.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
