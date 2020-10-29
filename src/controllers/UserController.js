const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const users = await User.find();
    return res.json(users);
  },
  async show(req, res) {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  },
  async store(req, res) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: "User already exists" });

      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },
  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(user);
  },
  async destroy(req, res) {
    const user = await User.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
