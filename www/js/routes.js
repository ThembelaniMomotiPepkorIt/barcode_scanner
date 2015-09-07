angular.module('starter.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise(function($injector, $location){
		var $state = $injector.get('$state');
		$state.go('main.landing');
	});

	$stateProvider
		.state('main',{
			url : '/',
			abstract : true,
			templateUrl : 'templates/main.html'
		})
		.state('main.landing', {
			url : 'landing',
			views : {
				'landing-tab' : {
					templateUrl : 'templates/landing.html',
					controller : 'LandingCtrl'
				}
			}
		})
		.state('main.selection', {
			url : 'selection', 
			views : {
				'selection-tab' : {
					templateUrl : 'templates/selection.html',
					controller : 'SelectionCtrl'
				}
			}
			
		})

		.state('main.settings', {
			url : 'settings', 
			views : {
				'settings-tab' : {
					templateUrl : 'templates/settings.html'
					
				}
			}
			
		})
})