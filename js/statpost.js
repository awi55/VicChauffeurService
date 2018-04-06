var app = angular.module("myApp", []);

app.controller ("myCtrl", function ($scope){
    
    $scope.statuses = [];
    
    $scope.post = function () {
		$scope.statuses.splice(0, 0, $scope.status);
	};
    
	$scope.delete = function (index) {
			$scope.statuses.splice(index, 1);
	};
});