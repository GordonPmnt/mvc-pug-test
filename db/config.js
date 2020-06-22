const  mysql = require('mysql');

const  connection =    mysql.createConnection({
    host: 'localhost', 
 	user: 'root', 
 	password: '604604gg',
 	database: 'mvc',
});

module.exports = connection;
