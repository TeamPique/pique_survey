var team = team || {};

team.App = Backbone.View.extend({
	el: '#team',
	initialize: function() {
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' : 'popup'
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').slideDown('fast').mouseleave(function() {
			$('.team-desc').slideUp('fast');
		}); 
	},
});