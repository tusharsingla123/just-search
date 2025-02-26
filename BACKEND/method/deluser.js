const con = require("./config")

module.exports = (req, res) => 
{
    if(req.url == `/deluser/${req.params.profile_id}`)
    {
    var sql =`DELETE from profile where profile_id = ${req.params.profile_id} `;
   // res.send(data);
    
    con.query(sql, function (error, results, fields) 
    {

      if (error) throw error;
      //res.send(results);
      res.send("record deleted...");
    });
    }
}