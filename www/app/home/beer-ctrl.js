(function () {
	'use strict';
	angular.module('whatsnear').controller('beerCtrl', ['$scope', beerCtrl]);

	// get location data and find nearby restaurants

	function beerCtrl($scope){
		var vm = this;
		$scope.locations = [
			{name:"Iron Abbey"}
		];
	}
})();