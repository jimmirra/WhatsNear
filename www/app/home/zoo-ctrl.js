(function () {
	'use strict';
	angular.module('whatsnear').controller('zooCtrl', ['$scope', zooCtrl]);

	// get location data and find nearby zoos

	function zooCtrl($scope){
		var vm = this;
		$scope.locations = [
			{name:"Philadelphia Zoo"}
		];
	}
})();