Chat.controller('UserController', function ($scope, $location, $routeParams, UserModel) {
	$scope.confirm = function () {
		UserModel.addUser($scope.user.name);
		socket.emit('createUser', {user: UserModel.getUser()});
		
		socket.on('validateUser', function(data){
			console.log(data);
			if(data){
				console.log("Gat stofnað notanda: " + $scope.user.name);
			}
				
			else{
				console.log('Notendanafn þegar til!' + $scope.user.name);
				$location.path('/home/');
			}
		});

		$location.path('/board/');
	}
});