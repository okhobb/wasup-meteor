Template.members.helpers({

  members: function () {
    return Collections.Members.find({});
  }

});

Template.members.events({

  'click': function(e) {
    console.log('got a click');
  }

});
