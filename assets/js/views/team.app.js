var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	registerTpl: _.template($('#register-template').html()),
	initialize: function() {
		this.form();
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' 		 		 : 'popup',
		'click #team-register-btn' : 'beta',
		'click #team-logo'				 : 'beta',
		'click #team-register-btn' : 'create'
	},
	beta: function(e) {
		e.preventDefault();
		$('#team').hide();
		$('body').css('background', 'url(assets/img/bg2.jpg)');
		$('#beta').show();
	},
	form: function() {
		$('#team-register-form').html(this.registerTpl());
		$('#team-register-form').append('<p class="title footer">Proudly made in NYC</p>');
		return this;
	},
	create: function(e) {
		e.preventDefault();
		var name = $('#name').val().replace(/[^@.][[:punct:]]/g,"");
		var email = $('#email').val().replace(/[^@.][[:punct:]]/g,"");
		console.log(email);
		this.collection.create({name: name, email: email});
    this.thanks();
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('slow').mouseleave(function() {
			$('.team-desc').fadeOut('slow');
		}); 
	},
});