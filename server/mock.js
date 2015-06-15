if(Meteor.isServer) {
  Meteor.startup(function() {
    if(Meteor.users.find().count() === 0) {
      console.log('Add first test user');
      var userId = Accounts.createUser({
        username: 'cherishuser',
        password: 'password',
        email: 'admin@cherish.com',
        profile: {
          name: 'Test User'
        },
        votedOn: [],
        commentedOn: []
      });
    }

    if(Initiatives.find().count() === 0) {
      var mockData = [
        {
          title: 'Initiative 1', 
          description: 'Some arbitrary description goes here.', 
          votes: 20, 
          createdBy: userId, 
          category: 'Charity',
          imageUrl: "https://placeimg.com/300/250/arch"
        },
        {title: 'Initiative 2', description: 'Some arbitrary description goes here.', votes: 5, createdBy: userId, category: 'Event', imageUrl: "https://placeimg.com/300/250/arch"},
        {
          title: 'Initiative 3', 
          description: 'Some arbitrary description goes here.', 
          votes: 100, 
          createdBy: userId,
          category: 'Event',
          imageUrl: "https://placeimg.com/300/250/arch",
          comments: [
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            }
          ]          
        },
        {title: 'Initiative 4', description: 'Some arbitrary description goes here.', votes: 10, createdBy: userId, category: 'Non Profit', imageUrl: "https://placeimg.com/300/250/arch"},
        {title: 'Initiative 5', description: 'Some arbitrary description goes here.', votes: 150, createdBy: userId, category: 'Open Source',imageUrl: "https://placeimg.com/300/250/arch"},
        {title: 'Initiative 6', description: 'Some arbitrary description goes here.', votes: 20, createdBy: userId, category: 'Charity', imageUrl: "https://placeimg.com/300/250/arch"},
        {
          title: 'Initiative 7', 
          description: 'Some arbitrary description goes here.', 
          votes: 5, 
          createdBy: userId,
          category: 'Event',
          imageUrl: "https://placeimg.com/300/250/arch",
          comments: [
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            }
          ]
        },
        {title: 'Initiative 8', description: 'Some arbitrary description goes here.', votes: 100, createdBy: userId, category: 'Charity', imageUrl: "https://placeimg.com/300/250/arch"},
        {title: 'Initiative 9', description: 'Some arbitrary description goes here.', votes: 10, createdBy: userId, category: 'Event', imageUrl: "https://placeimg.com/300/250/arch"},
        {
          title: 'Initiative 10', 
          description: 'Some arbitrary description goes here.', 
          votes: 1, 
          createdBy: userId,
          category: 'Charity',
          imageUrl: "https://placeimg.com/300/250/arch",
          comments: [
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            },
            {
              message: "This is a comment.",
              createdBy: userId,
              createdAt: new Date()
            }
          ]
        }
      ];

      mockData.forEach(function(item) {
        console.log("Inserting " + item.title);
       // item._id = new Meteor.Collection.ObjectID();
       Initiatives.insert(item);
     });
    }
  });

  // TODO: Implement this when we have pub/sub going.
  //Meteor.publish('initiatives');

  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId}, {fields: {'votedOn': 1}});
    } else {
      this.ready();
    }
  });
}