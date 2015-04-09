var team = team || {};
var beta = beta || {};

beta.Router = Backbone.Router.extend({
	routes: {
		'' 		 : 'index',
		'team' : 'team'
	},
	index: function() {
		$('#team').hide();
		$('body').css('background', 'url(assets/img/bg2.jpg)');
		new beta.App({collection: collection});
		$('body').css('background-size', 'cover');
		$('#beta').show();
		$('#beta').fullpage({fixedElements: '#beta'});
	},
	team: function() {
		$('#beta').hide();
    $('body').css('background', '#70BDFC');
    $('#register-form').empty();
    new team.App({collection: collection});
    $('#team').show();
    $('#fullpage').fullpage({fitToSection: false});
	},
});