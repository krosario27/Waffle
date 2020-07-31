let request = process.argv.slice(2);
let response = {};

let Database = require('./classes/Database'); 
AraDTDatabase = new Database(); 
let Router = require('./classes/Router');
AraDTRouter = new Router(request, response);