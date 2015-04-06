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
		'click #team-logo'				 : 'beta'
	},
	beta: function(e) {
		e.preventDefault();
		$('#team').hide();
		$('body').css('background', 'url(assets/img/bg2.jpg)');
		$('#beta').show();
	},
	form: function() {
		$('#team-register-form').html(this.registerTpl());
		return this;
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').slideDown('slow').mouseleave(function() {
			$('.team-desc').slideUp('slow');
		}); 
	},
});