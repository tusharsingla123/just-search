var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db3"
});
con.connect((err)=>
{
    if (err)
    {
        console.log("Not Connected!");
    }
    else
        console.log("Connected!");
});

module.exports = con;