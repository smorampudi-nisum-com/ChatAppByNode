//connect to our server using io.connect. On connect, 

var socket = io.connect('http://localhost:7989');
socket.on('connect',function(data) {
	//let’s emit a message to confirm our connection with an event of join.
	socket.emit('join',"Hello message from server to client");
});
//listener for the  thread event, which updates messages

socket.on('thread', function(data){
	$('#thread').append('<li>' + data + '</li>')

});

$('form').submit(function() {
	var message = $('#message').val();
	socket.emit('messages',message);
	this.reset();
	return false;
});