// build your database

const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'mysqlpassword',
  database: 'products'
})

connection.connect()

module.exports = connection