Chat.controller('UserController', function ($scope, $location, $routeParams, UserModel) {
	var user = UserModel.getUser();
	$scope.confirm = function () {
		socket.emit('createUser', {user: 'Hilmar'})
		$location.path('/board/'); 
	}
});