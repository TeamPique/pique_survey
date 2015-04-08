var beta = beta || {};

beta.Users = Backbone.Firebase.Collection.extend({
	model: beta.User,
	url: 'http://pique.firebaseio.com/users',
});