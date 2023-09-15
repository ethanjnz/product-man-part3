const UserController = require('../controllers/person.controller');
const { User } = require('../models/user.model');

module.exports = function (app) {
    app.get('/api', UserController.allUser);
    app.get('/api/user/:id', UserController.getUser)
    app.post('/api/user', UserController.createUser)
}