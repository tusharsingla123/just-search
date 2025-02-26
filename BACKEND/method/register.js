const con = require("./config")

module.exports = (req, res) => 
{
    //var data  = {studentid: 6, name: 'Sharma Sandeep',age:'25',gender:'male'};
    //var data  = req.body;
    var data  = {email_id: req.body.t1,password: req.body.t2,gender:req.body.t3,sec_question:req.body.t4,sec_answer:req.body.t5,role:req.body.t6};

    var sql ='INSERT INTO register_user SET ?';
   // res.send(data);
    
    con.query(sql, data, function (error, results, fields) 
    {
      if (error) throw error;
      res.send("Record Inserted");
    });
}