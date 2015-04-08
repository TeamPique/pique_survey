var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	modalElem: $('#team-thanks'),
	initialize: function() {
		this.form();
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' 		 		: 'popup',
		'click #team-beta-btn' 		: 'beta',
		'click #team-nav-img'	 		: 'beta',
		'click #register-btn'  		: 'createOnClick',
		'keypress .register-form' : 'createOnEnter',
		'click #team-header-pic'	: 'pan'
	},
	beta: function(e) {
		e.preventDefault();
		$('#team').hide();
		$('body').css('background', 'url(assets/img/bg2.jpg)');
		$('body').css('background-size', 'cover');
		new beta.App()
		$('#beta').show();
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
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('slow').mouseleave(function() {
			$('.team-desc').fadeOut('slow');
		}); 
	},
});