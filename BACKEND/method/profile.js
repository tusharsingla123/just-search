const con = require("./config")

module.exports = (fname,req, res) => 
{
    //var data  = {studentid: 6, name: 'Sharma Sandeep',age:'25',gender:'male'};
    //var data  = req.body;
    var data  = {email_id: req.body.t1,first_name: req.body.t2,last_name:req.body.t3,category:req.body.t4,org_name:req.body.t5,address:req.body.t6,city:req.body.t7,state:req.body.t8,contactno:req.body.t9,contact_person:req.body.t10,gmap_link:req.body.t11,profileimage:fname};

    var sql ='INSERT INTO profile SET ?';
   // res.send(data);
    
    con.query(sql, data, function (error, results, fields) 
    {
      if (error) throw error;
      res.send({"Message":"Record Inserted"});
    });
}