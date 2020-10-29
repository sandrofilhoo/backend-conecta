const mongoose = require("mongoose");

const Menu = mongoose.model("Menu");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const menus = await Menu.find()
    return res.json(menus);
  },
  async show(req, res) {
    const menu = await Menu.findById(req.params.id);
    return res.status(200).json(menu);
  },
  async store(req, res) {
    const { code } = req.body;

    try {
      if (await Menu.findOne({ code }))
        return res.status(400).send({ error: "Menu already exists" });

      const menu = await Menu.create(req.body);
      return res.status(200).json(menu);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(menu);
  },
  async destroy(req, res) {
    const menu = await Menu.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
