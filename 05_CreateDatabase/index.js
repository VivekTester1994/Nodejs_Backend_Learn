let mysql = require("mysql2");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vivek_123",
  database: "vivekdb_node",
});
con.connect(function (err) {
  if (err) throw err;
  console.log(" Hurray Database is connected ");
  //   con.query("Create Database Vivekdb_node", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   let sql = "Create Table family (name varchar(255), address varchar(255))";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table Created");
  //   });
  let sql = "Insert into family (name,address) VALUES('Vivek','Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Created");
  });
});
