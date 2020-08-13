const path = require("path")
const forever = require('forever-monitor');

const filePath = path.join(__dirname, "./index.js")
// console.log(filePath)

var child = new (forever.Monitor)('index.js', {
max:3,
silent: true,
sourceDir: '/index.js',
watch:true,
args: []
});

child.on('watch:restart', function(info) {
console.error('Restaring script because ' + info.file + ' changed');
});

child.on('restart', function() {
console.error('Forever restarting script for ' + child.times + ' time');
});

child.on('exit:code', function(code) {
console.error('Forever detected script exited with code ' + code);
});

child.start();