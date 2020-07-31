class Database{

    constructor(){
        
        if (typeof this.instance === 'object') {
            return this.instance;
        }
        this.fs = require('fs');
        this.db = './db.json';

        let rawdata = this.fs.readFileSync(this.db);
        this.users = JSON.parse(rawdata);
        this.instance = this;
        return this;
    }

    login(email, password) {
        var login = false
        this.users.forEach(function(user){
            if (user.hasOwnProperty(email) && user[email] === password) {
                login = true;
            }
        });
        return login;
    }

    register(email, password) {
        let newUser = {};
        newUser[email] = password;
        this.users.push(newUser);
        this.fs.writeFileSync(this.db, JSON.stringify(this.users));
        return true;
    }

    userExists(email){
        //this.stall();
        var userExists = false
        this.users.forEach(function(user){
            if (user.hasOwnProperty(email)) {
                userExists = true;
            }
        });
        return userExists;
    }

    stall = async (stallTime = 3000) => {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    }

}
module.exports = Database;