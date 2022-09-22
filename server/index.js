const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: 3306,
  password: "shruti1234",
  database: "aavhaandb",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INOT user (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);
  db.query(
    `SELECT * FROM users WHERE username = ${username} AND password = ${password};`,
    (err, result) => {
      if (!err) {
        console.log(result);
        res.json(result);
      }

      // if (result) {
      //   console.log(result);
      //   res.json(result);
      // }
      else {
        console.log(err);
        res.json({ message: "Wrong Username or Password" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server successfully");
});
