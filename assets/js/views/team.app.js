var team = team || {};
var beta = beta || {};

team.App = Backbone.View.extend({
	el: '#team',
	initialize: function() {
		$('.team-desc').hide();
	},
	events: {
		'mouseover .photo' 		 : 'popup',
		'click #team-register' : 'beta'
	},
	beta: function(e) {
		e.preventDefault();
		this.$el.hide();
		
	},
	popup: function(e) {
		e.preventDefault();
		var $description = $(e.currentTarget);
		$description.find('.team-desc').slideDown('fast').mouseleave(function() {
			$('.team-desc').slideUp('fast');
		}); 
	},
});