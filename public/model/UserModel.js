Chat.service('UserModel', function () {
	var user = "Hundur";
	
	this.getUser = function () {
		return this.user;
	},
	this.addUser = function (userName) {
		this.user = userName;
	}

	this.getUsers = function(){
		var userList = [];
		socket.emit('getUsers');
		socket.on('userList', function(data){
			userList = data;
			console.log(data);
		});

		return userList;
	}
});