var beta = beta || {};


beta.Users = Backbone.Collection.extend({
	model: beta.User,
	initialize: function () {
      var that = this;
      // Hook into jquery
      // Use withCredentials to send the server cookies
      // The server must allow this through response headers
      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        // options.xhrFields = {
        //   withCredentials: true
        // };
          jqXHR.setRequestHeader('X-CSRF-Token', that.get('_csrf'));
      });
    },
	url: 'http://pique-beta-serv.herokuapp.com/user'
});




