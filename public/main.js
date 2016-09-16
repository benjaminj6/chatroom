$(document).ready(function() {

	var input = $('input');
	var messages = $('#messages');

	function addMessage(message) {
		messages.append('<div>' + message + '</div>');
	}

	input.on('keydown', function(event) {
		if (event.keyCode === 13) {
			var message = input.val();
			addMessage(message);
			input.val('');
		}


	});

});