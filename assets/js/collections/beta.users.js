var beta = beta || {};


beta.Users = Backbone.Collection.extend({
	model: beta.User,
	// initialize: function () {
 //      var that = this;
 //      // Hook into jquery
 //      // Use withCredentials to send the server cookies
 //      // The server must allow this through response headers
 //      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
 //        // options.xhrFields = {
 //        //   withCredentials: true
 //        // };
 //          jqXHR.setRequestHeader('Access-Control-Allow-Origin', 'http://piqueapp.github.io');
 //      });
 //    },
	url: 'http://pique-beta-serv.herokuapp.com/user'
});




