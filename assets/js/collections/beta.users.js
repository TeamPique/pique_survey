var beta = beta || {};

Backbone.sync = function(method, collection, options) {
        console.log(method, collection options)
}

beta.Users = Backbone.Collection.extend({
	model: beta.User,
	url: 'http://pique-beta-serv.herokuapp.com/user',
});




