var beta = beta || {};

beta.App = Backbone.View.extend({
	el: '#beta',
  modalElem: $('#beta-modal'),
	initialize: function() {
    new team.App({collection: collection});
    $('#team').hide();
		this.form();
		this.countdown('04/24/2015 12:0 AM');
    ref = new Firebase(FIREBASE_URL + '/users');
	},
	events: {
    'click #learn-btn'        : 'team',
		'click #register-btn'     : 'createOnClick',
    'keypress .register-form' : 'createOnEnter'
	},
  team: function() {
    this.$el.hide();
    $('#register-form').empty();
    $('#team').show();
  },
	form: function() {
    $('#register-form').html(this.registerTpl());
    $('#register-form').append('<p class="title footer">© Pique 2015. All Rights Reserved</p>');
		return this;
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



