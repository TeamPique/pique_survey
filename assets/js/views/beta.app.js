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
	},
	events: {
		'click #register-btn'     : 'create',
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
	create: function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
    this.collection.create({name: name, email: email});
    this.modal();
	},
  createOnEnter: function(e) {
    if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
      return;
    }
    var name = $('#name').val();
    var email = $('#email').val();
    console.log(email);
    this.collection.create({name: name, email: email});
    this.modal();
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



