const m = require("../utils");

console.log(new Date());
let ts = m.timestamp(false, true, true);
console.log(ts);

console.log(new Date(ts));
