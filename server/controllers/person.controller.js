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
        .then(users => res.json(users))
        .catch(err => res.json(err));
};

// read one person
module.exports.getUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
}


