const UserController = require('../controllers/person.controller');

module.exports = function (app) {
    app.get('/api', UserController.allUser);
    app.post('/api/user', UserController.createUser)
}