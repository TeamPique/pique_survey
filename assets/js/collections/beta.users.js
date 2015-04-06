var beta = beta || {};

beta.Users = Backbone.Collection.extend({
	model: beta.User,
	url: 'http://piqueapp.github.io/127.0.0.1/users',
});


