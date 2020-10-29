const mongoose = require("mongoose");

const SalePanel = mongoose.model("SalePanel");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const salepanels = await SalePanel.find();
    return res.json(salepanels);
  },
  async show(req, res) {
    const salepanels = await SalePanel.findOne({id: req.params.id});
    return res.status(200).json(salepanels);
  },
  async store(req, res) {
    const { id } = req.body;

    try {
      if (await SalePanel.findOne({ id }))
        return res.status(400).send({ error: "Sale Panel already exists" });

      const salepanel = await SalePanel.create(req.body);
      return res.status(200).json(salepanel);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const salepanel = await SalePanel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(salepanel);
  },
  async destroy(req, res) {
    const salepanel = await SalePanel.deleteOne({ id: req.params.id });
    return res.status(200).json("Sale Panel deleted");
  },
};
