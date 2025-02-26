const con = require("./config")

module.exports = (req, res) => 
{
    //var data  = {studentid: 6, name: 'Sharma Sandeep',age:'25',gender:'male'};
    //var data  = req.body;
    var data  = {city_name: req.body.t1};

    var sql ='INSERT INTO city SET ?';
   // res.send(data);
    
    con.query(sql, data, function (error, results, fields) 
    {
      if (error) throw error;
      res.send("Record Inserted");
    });
}