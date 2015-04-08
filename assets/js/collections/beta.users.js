var beta = beta || {};

beta.Users = Backbone.Firebase.Collection.extend({
	model: beta.User,
	url: 'https://pique.firebaseio.com/' + 'users',
});