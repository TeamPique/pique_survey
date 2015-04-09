var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	modalElem: $('#team-thanks'),
	initialize: function() {
		this.form();
		this.send();
	},
	events: {
		'mouseover .photo' 		 		: 'popup',
		'click #team-beta-btn' 		: 'beta',
		'click #team-nav-img'	 		: 'beta',
		'click #register-btn'  		: 'createOnClick',
		'keypress .register-form' : 'createOnEnter',
		'click #team-header-arrow': 'pan',
		'click #team-about-arrow'	: 'panTeam'
	},
	beta: function(e) {
		router.navigate('', {trigger: true});
	},
	form: function() {
		$('#team-register-form').html(this.registerTpl());
		$('#team-footer').append('<p class="title footer">Proudly made in NYC</p>');
		return this;
	},
	pan: function(e) {
		e.preventDefault();
		console.log('sup');
  	$('html, body').animate({
	    scrollTop: $('#team-about').offset().top
	  }, 1000);
	},
	panTeam: function(e) {
		e.preventDefault();
		console.log('sup');
  	$('html, body').animate({
	    scrollTop: $('#team-section').offset().top
	  }, 1000);
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('fast').mouseleave(function() {
			$('.team-desc').fadeOut('fast');
		}); 
	},
});