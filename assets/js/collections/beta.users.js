var beta = beta || {};

beta.Users = Backbone.Collection.extend({
	model: beta.User,
	url: 'http://pique.firebaseio.com/users',
});