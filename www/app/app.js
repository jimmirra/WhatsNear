angular.module('whatsnear', ['ngCordova', 'ionic']).run(function($ionicPlatform){
	$ionicPlatform.ready(function() {
		 // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	      cordova.plugins.Keyboard.disableScroll(true);

	    }
	    if (window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      StatusBar.styleDefault();
	    }
	});
}).config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider){
	// force tab bar to bottom on all platforms
	$ionicConfigProvider.tabs.position('bottom');

	$stateProvider.state('home', {
		abstract:true,
		url: '/home',
		templateUrl: 'app/home/home.html'
	}).state('home.food', {
		url: '/food',
		views: {
			'tab-food': {
				templateUrl: 'app/home/food.html'
			}
		}
	}).state('home.beer', {
		url: '/beer',
		views: {
			'tab-beer': {
				templateUrl: 'app/home/beer.html'
			}
		}
	}).state('home.zoo', {
		url: '/zoo',
		views: {
			'tab-zoo': {
				templateUrl: 'app/home/zoo.html'
			}
		}
	})

	$urlRouterProvider.otherwise('/home/food');
});