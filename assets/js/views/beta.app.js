var beta = beta || {};

beta.App = Backbone.View.extend({
	el: '#beta',
	registerTpl: _.template($('#register-template').html()),
  successTpl: _.template($('#success-template').html()),
	initialize: function() {
    new team.App({collection: collection});
    $('#team').hide();
		this.form();
		this.countdown('04/22/2015 12:0 AM', 'countdown');
	},
	events: {
		'click #register-btn' : 'create',
    'click #learn-btn'    : 'team'
	},
  thanks: function() {
    $('#beta-thanks').html(this.successTpl());
    return this;
  },
  team: function() {
    $('#beta').hide();
    $('body').css('background', '#fff');
    $('#team').show();
  },
	form: function() {
    $('#register-form').html(this.registerTpl());
    $('#register-form').append('<p class="title footer">© Pique 2015. All Rights Reserved</p>');
		return this;
	},
	create: function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		console.log(email);
		// this.collection.create({name: name, email: email});
    this.thanks();
	},
	countdown: function(date, id) {
    var launch = new Date(date);
    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;
    function count() {
      var now = new Date();
      var timespan = launch - now;
      if (timespan < 0) {
        clearInterval(timer);
        document.getElementById(id).innerHTML = 'Pique is now live';
        return false;
      }
      var days = Math.floor(timespan / day);
      var hours = Math.floor((timespan % days) / hour);
      var minutes = Math.floor((timespan % hour) / min);
      var seconds = Math.floor((timespan % min) / sec);
      $('#days').html('<h2>' + days + '</h2><p>days</p>');
      $('#hours').html('<h2>' + hours + '</h2><p>hours</p>');
      $('#minutes').html('<h2>' + minutes + '</h2><p>minutes</p>');
      $('#seconds').html('<h2>' + seconds + '</h2><p>seconds</p>');
  }

    timer = setInterval(count, 1000);
  },
});



