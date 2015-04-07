var beta = beta || {};


beta.Users = Backbone.Collection.extend({
	model: beta.User,
	rootUrl: 'http://pique-beta-serv.herokuapp.com/user',
});




