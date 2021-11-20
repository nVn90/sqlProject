const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nVn@2021',
  database: 'empdata'
});

conn.connect((err)=>{
  if(err)
    throw err;
  console.log("Connection Successful.")
});

module.exports = conn;