import * as mysql from 'mysql'

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlroot"
  });
  
  con.connect(function(err) {
    if (err) throw console.log(err);
    console.log("Connected!");
  });