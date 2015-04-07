var beta = beta || {};

(function() {

  var proxiedSync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    options || (options = {});

    if (!options.crossDomain) {
      options.crossDomain = true;
    }

    if (!options.xhrFields) {
      options.xhrFields = {withCredentials:true};
    }

    return proxiedSync(method, model, options);
  };
})();

beta.Users = Backbone.Collection.extend({
	model: beta.User,
	url: 'http://pique-beta-serv.herokuapp.com/user',
});




