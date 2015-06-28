// See notificationsHelpers.js for helpers

Template.notificationsDropdown.events({
  'click .notification': function(e) {
    e.preventDefault();

    var initiative = Initiatives.findOne({_id: this.initiativeId});

    Router.go('initiative', {slug: initiative.slug});
    Meteor.call('markNotificationsAsRead', this.ids, function(err, response) {
      if(err){
        sAlert.error('Something went wrong...');
      }
    });
  }
});