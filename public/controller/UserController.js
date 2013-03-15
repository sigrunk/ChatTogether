Chat.controller('UserController', function ($scope, $location, $routeParams, UserModel) {
	$scope.confirm = function () {
		UserModel.addUser($scope.user.name);
		socket.emit('createUser', {user: UserModel.getUser()});
		socket.on('validateUser', function(data){
			console.log(data);
			if(data == true){
				$location.path('/board/');
				console.log("Gat stofnað notanda");
			}
				
			else{
				console.log('Notendanafn þegar til!'); 
			}
		});
	}
});