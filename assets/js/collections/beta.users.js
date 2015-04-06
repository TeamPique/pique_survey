var beta = beta || {};

beta.Users = Backbone.Collection.extend({
	model: beta.User,
	url: 'http://piquebeta.herokuapp.com/users',
});


