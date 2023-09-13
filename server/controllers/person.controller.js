const { User } = require('../models/user.model')

module.exports.index = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.createUser = (req, res) => {
    const { firstName, lastName } = req.body;
    User.create({ firstName, lastName })
        .then(person => res.json(person))
        .catch(err => res.json(err));
}
