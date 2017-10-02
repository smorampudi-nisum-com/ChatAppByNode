//require express and socket.io, and create a new server. 
var express = require('express');
var app = express();
var server =  require('http').createServer(app);
var io = require('socket.io')(server);
//need to use app.get to deliver an HTML file easily.
app.get('/', function(req,res, next){
	//line 9 ensure that express know that all static (html,css,js) files are in the public folder.
	res.sendFile(__dirname+ '/public/index.html')
});

app.use(express.static('public'));

io.on('connection', function(client) {
	console.log('client connected...');

	client.on('join', function(data) {
		console.log(data);
	});

	client.on('messages',function(data){
		client.emit('thread',data);
		client.broadcast.emit('thread',data);
	});
});

server.listen(7989);