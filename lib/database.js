Meteor.startup(function() {
  Collections = {
    Messages: new Mongo.Collection('Messages'),
    Members: new Mongo.Collection('Members')
  };

  if (Meteor.isClient) {
    Meteor.subscribe('messages', {
      onError: function(err) {
	console.error('error!', arguments);
      },
      onReady: function() {
	console.log('ready!', arguments);
      }
    });
  }

  if (Meteor.isServer) {

    Meteor.publish('messages', function() {
      return Collections.Messages.find({}, { sort: [[ 'timeMillis', 'desc' ]] });
    });

    Collections.Messages.allow({
      insert: function(username, document) {
	return true;
      },
      update: function(username, document, fieldNames, modifier) {
	return false;
      },
      remove: function(username, document) {
	return false;
      }
    });

  }
});

if (Meteor.isServer) {
  Meteor.startup(function() {

    // Collections.Datasets._ensureIndex(
    //   { "$**": "text" },
    //   { name: "TextIndex" }
    // );

  });
}
