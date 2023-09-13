const UserController = require('../controllers/person.controller');

module.exports = function (app) {
    app.get('/api', UserController.index);
    app.post('/api/user', UserController.createUser)
}