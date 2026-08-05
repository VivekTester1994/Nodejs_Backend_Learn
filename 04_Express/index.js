const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("Hello world  from Express");
});
app.post("/", (req, res) => {
  res.send("Post request to the HomePage");
});
app.get("/about", (req, res) => {
  res.send("Welcome to About us Page");
});
app.post("/about", (req, res) => {
  res.send("Post request to the AboutUs Page");
});
app.listen(port, () => {
  console.log("Example  app listining at http://localhost:8000");
});
