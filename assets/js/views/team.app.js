var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	modalElem: $('#team-modal'),
	initialize: function() {
		this.form();
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' 		 		: 'popup',
		'click #team-beta-btn' 		: 'beta',
		'click #team-nav-img'	 		: 'beta',
		'click #register-btn'  		: 'createOnClick',
		'keypress .register-form' : 'createOnEnter'
	},
	beta: function() {
		this.$el.hide();
		$('#team-register-form').empty();
		new beta.App();
		$('#beta').show();
	},
	form: function() {
		$('#team-register-form').html(this.registerTpl());
		$('#team-footer').append('<p class="title footer">Proudly made in NYC</p>');
		return this;
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').fadeIn('slow').mouseleave(function() {
			$('.team-desc').fadeOut('slow');
		}); 
	},
});