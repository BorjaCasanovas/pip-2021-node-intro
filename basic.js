const os = require("os");
const chance = require("chance");
 
const mychance = new chance();

console.log("Hi")

console.log(`It look like you're running a ${os.platform()}machine`);

console.log("Your new fake name is  " + mychance.name);
