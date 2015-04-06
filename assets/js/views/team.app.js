var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	initialize: function() {
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' 		 		 : 'popup',
		'click #team-register-btn' : 'beta'
	},
	beta: function(e) {
		e.preventDefault();
		$('#team').hide();
		$('body').css('background', 'url(assets/img/bg2.jpg)');
		$('#beta').show();
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').slideDown('fast').mouseleave(function() {
			$('.team-desc').slideUp('fast');
		}); 
	},
});