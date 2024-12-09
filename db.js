const mysql = require('mysql2/promise'); 

const conexao = mysql.createPool({
  uri: process.env.CONNECTION_STRING 
});

module.exports = conexao; 
