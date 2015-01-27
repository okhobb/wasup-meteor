Template.messages.helpers({

  messages: function () {
    return Collections.Messages.find({}, { sort: [[ 'timeMillis', 'desc' ]] });
  }

});

Template.messages.events({

  'keydown input#message-input': function(event, template) {

    if (event.which === 13) {
      event.preventDefault();
      var text = $('#message-input').val();
      var username = $('#username-input').val();
      var message = {
	text: text,
	username: username,
	timeMillis: Date.now()
      };
      Collections.Messages.insert(message, function(err, id) {
	console.log('inserted!');
	$('#message-input').val('');
      });
    }

  }

});
