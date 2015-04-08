var beta = beta || {};

beta.App = Backbone.View.extend({
	el: '#beta',
	registerTpl: _.template($('#register-template').html()),
  modalTpl: _.template($('#modal-template').html()),
	initialize: function() {
    new team.App({collection: collection});
    $('#team').hide();
		this.form();
		this.countdown('04/24/2015 12:0 AM');
    ref = new Firebase(FIREBASE_URL + '/users');
    this.send();
	},
	events: {
		'click #register-btn'     : 'createOnClick',
    'click #learn-btn'        : 'team',
    'keypress .register-form' : 'createOnEnter'
	},
  modal: function() {
    $('#beta-thanks').html(this.modalTpl());
    return this;
  },
  team: function() {
    $('#beta').hide();
    $('body').css('background', '#fff');
    $('#register-form').empty();
    $('#team').show();
  },
	form: function() {
    $('#register-form').html(this.registerTpl());
    $('#register-form').append('<p class="title footer">© Pique 2015. All Rights Reserved</p>');
		return this;
	},
  send: function() {
    ref.on("value", function(snapshot) {
      console.log('Firebase Collection', snapshot.val());
      }.bind(this), function (errorObject) {
          console.log("The read failed: " + errorObject.code);
    });
  },
  validate: function(email) {
    var regEx = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return regEx.test(email);
  },
  create: function() {
    var name = $('#name').val();
    var email = $('#email').val();

    if (email !== "") {
      if (!this.validate(email)) {
        $('#email-error').text('Please enter a valid email address');
        $('#email-error').css({color: 'red'});
        $('#email').focus();
        return false;  
      }
    } 

    this.collection.create({
        name: name,
        email: email
      });

    this.modal()
    
  },
	createOnClick: function(e) {
		e.preventDefault();
    this.create();
	},
  createOnEnter: function(e) {
    if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
      return;
    }
    this.create();
  },
	countdown: function(date) {
    var launch = new Date(date);
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var time;

    function count() {
      var now = new Date();
      var timespan = launch - now;
      if (timespan < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'Pique is now live';
        return false;
      }
      var days = Math.floor(timespan / day);
      var hours = Math.floor((timespan % day) / hour);
      var minutes = Math.floor((timespan % hour) / minute);
      var seconds = Math.floor((timespan % minute) / second);
      $('#days').html('<h2>' + days + '</h2><p>days</p>');
      $('#hours').html('<h2>' + hours + '</h2><p>hours</p>');
      $('#minutes').html('<h2>' + minutes + '</h2><p>minutes</p>');
      $('#seconds').html('<h2>' + seconds + '</h2><p>seconds</p>');
  }

    timer = setInterval(count, 1000);
  },
});



