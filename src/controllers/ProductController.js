const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.find()
    return res.json(products);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  },
  async store(req, res) {
    const { code } = req.body;

    try {
      if (await Product.findOne({ code }))
        return res.status(400).send({ error: "Product already exists" });

      const product = await Product.create(req.body);
      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(product);
  },
  async destroy(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
