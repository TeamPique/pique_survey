var beta = beta || {};

beta.App = Backbone.View.extend({
	el: '.wrapper',
	registerTpl: _.template($('#register-template').html()),
	initialize: function() {
		this.form();
		this.countdown('04/22/2015 12:0 AM', 'countdown');
	},
	events: {
		'click #register-btn' : 'create'
	},
	form: function() {
		$('#register-form').html(this.registerTpl());
		return this;
	},
	create: function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		console.log(email);
		this.collection.create({name: name, email: email});
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
      document.getElementById(id).innerHTML = days + '<br>days<br>';
      document.getElementById(id).innerHTML += hours + '<br>hrs<br>';
      document.getElementById(id).innerHTML += minutes + '<br>mins<br>';
      document.getElementById(id).innerHTML += seconds + '<br>secs<br>';
  }

    timer = setInterval(count, 1000);
  },
});



