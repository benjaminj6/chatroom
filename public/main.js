$(document).ready(function() {
	var socket = io();

	var input = $('input');

	input.on('keydown', function(event) {
		if (event.keyCode === 13) {
			var message = input.val();
			addMessage(message);
			socket.emit('message', message);
			
			input.val('');
		}
	});

	function addMessage(message) {
		var messages = $('#messages');
		messages.append('<div>' + message + '</div>');
	}

	function displayConnection(message) {
		$('#users-connected').append('<p>' + message + '</p>');
	}

	socket.on('message', addMessage);

	socket.on('connection', displayConnection);

});