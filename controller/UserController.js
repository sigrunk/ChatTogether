Chat.controller('UserController', function ($scope, $location, $routeParams) {
	var user = $routeParams.user;
	$scope.confirm = function () {
		$location.path('/board/'); 
	}
});