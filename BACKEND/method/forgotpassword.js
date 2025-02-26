const con = require("./config")

module.exports = (req, res) => 
{
  //   var data  = {password:req.body.t3,email_id: req.body.t1};
  //   var sql ='UPDATE register_user set ?';
  //  // res.send(data);
    
  //   con.query(sql, data, function (error, results, fields) 
  //   {
  //     if (error) throw error;
  //     res.send("Updated"); 
  //   });
  //var x = "Sandeep";
  var sql =`select count(*) as count from  register_user where email_id = '${req.body.t1}' and sec_answer = '${req.body.t2}'`;
  con.query(sql, function (error, results, fields) 
  {
    if (error) throw error;

       if(results[0]["count"] == 1)
       {
        //res.send("yes")
          var data  = {password:req.body.t3,email_id: req.body.t1};
          var sql ='UPDATE register_user set ?';
          con.query(sql, data, function (error, results, fields) 
          {
            if (error) throw error;
            res.send({"Message":"Password Updated..."});
          });

       }
       else 
         res.send({"Message":"User Name or Password not Match"})
  });
}