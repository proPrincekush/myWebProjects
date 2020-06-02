var js = 100;
//document.write(js);
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

var app = "";
var get ;
console.log(app);

console.log(typeof(app));
console.log(get);

console.log(typeof(get));
