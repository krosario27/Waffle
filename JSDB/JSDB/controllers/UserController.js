class UserController{

    processRequest(request, response){

        var action = request[0];

        switch (action) {
            case 'login':
                response = this.login(request, response);
                break;
            case 'register':
                response = this.register(request, response);
                break;
            default:
                response = {"Message": "404 Error"}
          }
        return { request, response };
    }

    login(request, response){
        let email = request[1];
        let password = request[2];
        var message = 'There was a problem logging you in';
        if (!email) {
            message = 'You need an email to login';
        } else if (!password) {
            message = 'You need a password to login';
        } else if (!AraDTDatabase.userExists(email)) {
            message = 'There is no user with this email';
        } else {
            if (AraDTDatabase.login(email, password)) {
                message = 'You are now logged in';
            } else {
                message = 'Your credentials fail to match any user';
            }
        }
        return {"Message": message};
    }

    register(request, response){
        let email = request[1];
        let password = request[2];
        var message = 'There was a problem registering you in';
        if (!email) {
            message = 'You need an email to register';
        } else if (!password) {
            message = 'You need a password to register';
        } else if (AraDTDatabase.userExists(email)) {
            message = 'There is a user with this email';
        } else {
            if (AraDTDatabase.register(email, password)) {
                message = 'You are now registered';
            } else {
                message = 'Your credentials fail to match any user';
            }
        }
        return {"Message": message};
    }

}
module.exports = UserController;