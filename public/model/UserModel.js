Chat.service('UserModel', function () {
	var user = "Hundur";
	this.getUser = function () {
		return this.user;
	},
	this.addUser = function (userName) {
		this.user = userName;
	}
});