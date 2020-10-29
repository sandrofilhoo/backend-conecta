const mongoose = require("mongoose");

const Order = mongoose.model("Order");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const orders = await Order.find()
    return res.json(orders);
  },
  async show(req, res) {
    const order = await Order.findById(req.params.id);
    return res.status(200).json(order);
  },
  async store(req, res) {
    const { code } = req.body;

    try {
      if (await Order.findOne({ code }))
        return res.status(400).send({ error: "Order already exists" });

      const order = await Order.create(req.body);
      return res.status(200).json(order);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(order);
  },
  async destroy(req, res) {
    const order = await Order.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
