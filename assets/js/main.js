var beta = beta || {};

var ENTER_KEY = 13
var FIREBASE_URL  = new Firebase('https://pique.firebaseio.com');
var ref = new Firebase(FIREBASE_URL + '/users');

new WOW(
    { offset: 120 }
).init();


var collection = new beta.Users();
var router = new beta.Router();
Backbone.history.start();

