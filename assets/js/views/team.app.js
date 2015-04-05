var team = team || {};

team.App = Backbone.View.extend({
	el: '#team',
	initialize: function() {
		$('.team-desc').hide();
	},
	events: {
		'click .photo' : 'popup'
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').slideDown('slow').mouseleave(function() {
			$('.team-desc').slideUp('slow');
		});
    

    
	},
});

new team.App();