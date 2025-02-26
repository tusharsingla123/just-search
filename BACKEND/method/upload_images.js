const con = require("./config")


module.exports = (fname,req,res) => 
{
    //var data  = {rno: 6, stu_name: 'Sharma Sandeep',contact:'9896633885',address:'Karnal'};
    //var data  = req.body;
    
    var data  = {image_name: fname, profile_id: req.body.t1};

    var sql ='INSERT INTO upload_images SET ?';
    
    con.query(sql, data, function (error, results, fields) 
    {
      if (error) throw error;
      res.send("images uploaded...");
    });
    
    
}