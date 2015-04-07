var beta = beta || {};

var ENTER_KEY = 13

Backbone.sync = function(method, collection, options) {

          // Backwards compatibility with Backbone <= 0.3.3
  if (typeof options == 'function') {
    options = {
      success: options,
      error: error
    };
  }

  var resp = function(resp) {
    if (resp.status) {
      options.success(method != 'read' ? model : resp.data);
    }
    else {
      options.error('Record not found ' + resp.data);
    }
  };


  var store = collection.customStorage || collection.customStorage;

  switch (method) {
    case 'create':  store.create(collection.attributes, resp); break;
  }
}

var collection = new beta.Users();
new beta.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

