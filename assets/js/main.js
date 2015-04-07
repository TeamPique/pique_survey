var beta = beta || {};

var ENTER_KEY = 13

Backbone.sync = function(method, collection, options) {
        console.log(options)
        console.log(collection)
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


  var store = model.customStorage || model.collection.customStorage;

  switch (method) {
    case 'read':    model.id ? store.read({id: model.id}, resp) : store.readAll(resp); break;
    case 'create':  store.create(model.attributes, resp); break;
    case 'update':  store.update(model.attributes, resp); break;
    case 'delete':  store.delete(model.id, resp); break;
  }
}

var collection = new beta.Users();
new beta.App({collection: collection});

new WOW(
    { offset: 120 }
).init();

