const con = require("./config")

module.exports = (req, res) => {

  var sql = `select count(*) as count from  register_user where email_id = '${req.body.t1}' and password = '${req.body.t2}'`;
  con.query(sql, function (error, results, fields) {
    if (error) throw error;
    if (req.body.t1.trim() == "") {
      res.send({ "message": "please enter username...." })
    }
    else
    if (req.body.t2.trim() == "") {
      res.send({ "message": "please enter password...." })
    }
    else if (results[0]["count"] == 1) {
      //res.send("yes")
      var data = { password: req.body.t3, email_id: req.body.t1 };
      var sql = `select email_id,role from register_user where email_id = '${req.body.t1}' and password = '${req.body.t2}' `;
      con.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        //console.log(results)
        res.send(results);
      });

    }
    else
      res.send({ "Message": "User Name or Password not Match" })
  });
}