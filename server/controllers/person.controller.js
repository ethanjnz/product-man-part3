const { User } = require('../models/user.model')

module.exports.index = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.createUser = (req, res) => {
    const { title, price, description } = req.body;
    User.create({ title, price, description })
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

// read all
module.exports.allUser = (req, res) => {
    User.find()
        .then((userList) => res.json(userList))
        .catch((err) => res.json(err));
};
