//Reading File
// const fs = require("fs");
// const data = fs.readFileSync("notes.txt", "utf-8");
// console.log(data);
//Writing a File
const fs = require("fs");
fs.writeFileSync("notes.txt", "utf-8");
const data = { name: "John", age: 30, city: "NewYork" };
console.log(data);
