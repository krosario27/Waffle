var UserController = require('../controllers/UserController');

class Router{

    constructor(request, response){
        response = this.addControllers(request, response);
        console.log(response);
    }

    addControllers(request, response) {
        let userController =  new UserController();
        return userController.processRequest(request, response);
    }

}
module.exports = Router;