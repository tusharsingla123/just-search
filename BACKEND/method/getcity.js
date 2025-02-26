const con = require("./config")

module.exports = (req, res) => 
{
    //var data  = {studentid: 6, name: 'Sharma Sandeep',age:'25',gender:'male'};
    //var data  = req.body;
    //var data  = {email_id: req.body.t1,password: req.body.t2};

    var sql =`select * from city where statename = '${req.body.t1}'`;
   // res.send(data);
    
    con.query(sql, function (error, results, fields) 
    {

      if (error) throw error;
      res.send(results);
    });
}