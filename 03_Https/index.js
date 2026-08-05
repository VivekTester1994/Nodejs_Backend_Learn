// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("I got an incoming request");
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end("Thanks  for visting  my server");
// });

// server.listen(8000, function () {
//   console.log("Http server is  up and running on port 8000");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "content-type": "text/html",
//     "X-Powered-By": "Node.js",
//     "cache-control": "no-cache,no-store,must-revalidate",
//     "set-cookie": "sessionid=abc123; HttpOnly",
//   });
//   res.end("<h1>Hello Vivek welcome to my website and how are you</h1>");
// });
// server.listen(8000, () => {
//   console.log("Server running at http://localhost:8000");
// });

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
