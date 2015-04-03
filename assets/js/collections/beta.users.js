var beta = beta || {};

beta.Users = Backbone.Collection.extend({
	model: beta.User,
	// url: 'https://pique.firebaseio.com/users/',
});