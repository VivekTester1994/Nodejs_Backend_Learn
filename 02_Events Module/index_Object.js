const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("greet", () => {
  console.log("HelloThere vivek! ");
});
myEmitter.once("greet", () => {
  console.log("This is runs only one time it does not  run");
});
myEmitter.on("greet", () => {
  console.log("HelloThere vivek");
});

console.log("First emit")
myEmitter.emit("greet");

console.log("Second emit")
myEmitter.emit("greet");

