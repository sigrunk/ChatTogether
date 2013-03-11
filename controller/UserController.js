Chat.controller('UserController', function ($scope, $location, $routeParams) {
	var user = $routeParams.user;
	$scope.confirm = function () {
		$location.path('/board/'); // skil afhverju þetta virkar ekki! - 11.03 SIK
	}
});