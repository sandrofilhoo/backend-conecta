const mongoose = require("mongoose");

const Table = mongoose.model("Table");

module.exports = {
  async index(req, res) {
    const tables = await Table.find();
    return res.json(tables);
  },
  async show(req, res) {
    const tables = await Table.findById(req.params.id);
    return res.status(200).json(tables);
  },
  async store(req, res) {
    const { id } = req.body;

    try {
      if (await Table.findOne({ id }))
        return res.status(400).send({ error: "Table already exists" });

      const table = await Table.create(req.body);
      return res.status(200).json(table);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const table = await Table.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(table);
  },
  async destroy(req, res) {
    const table = await Table.deleteOne({ id: req.params.id });
    return res.status(200).json("Table deleted");
  },
};
