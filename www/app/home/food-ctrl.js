(function () {
	'use strict';
	angular.module('whatsnear').controller('foodCtrl', ['$scope', '$cordovaGeolocation', foodCtrl]);

	// get location data and find nearby restaurants
	function foodCtrl($scope, $cordovaGeolocation){
		var vm = this;

  		var posOptions = {timeout: 10000, enableHighAccuracy: false};
  		$cordovaGeolocation
    		.getCurrentPosition(posOptions)
    		.then(function (position) {
      			var lat  = position.coords.latitude;
 			    var long = position.coords.longitude;
 			    console.log(lat + ": "+long);
    		}, function(err) {
      			// error
    		});

		$scope.locations = [
			{name:"Anthony's Pizza"}, 
			{name:"Qdoba"},
			{name:"Fresh Market"},
			{name:"Chipotle"},
			{name:"Chick-Fil-A"},
			{name:"Starbucks"}
		];
	}
})();