const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const conn = mysql.createConnection({
  host: "localhost",
  database: "nsafter",
  user: "",
  password: "",
});

conn.connect(() => {
  console.log("db connected");
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  console.log(req.body);
  // const { username, password, email } = req.body;
  // let sqlquery = "inert into videoRegis(uname,passwd,email) values(?,?,?)";

  // conn.query(sqlquery, [username, password, email], (err, result) => {
  //   if (err) throw err;
  //   else {
  //     console.log(result);
  //   }
  // });
});

app.post("/login", (req, res) => {
  // const { username, password } = req.body;
  // const sqlquery =
  //   "select * from videoRegis where username='" +
  //   username +
  //   "' and passwd='" +
  //   password +
  //   "'";
  // conn.query(sqlquery, username, (err, result) => {
  //   if (result.length > 0) {
  //     let sqlq = "insert into userlog(uname) values(?)";
  //     conn.query(sqlq, username, (err, ressult) => {
  //       if (err) console.log(err);
  //       else {
  //         res.send({ message: "login successful" });
  //       }
  //     });
  //   } else {
  //     res.send({ message: "login unsuccessful" });
  //   }
  // });
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
