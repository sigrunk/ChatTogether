var chatConfig = function  ($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'UserController', templateUrl: 'view/chooseNickname.html'
	}).when('/board', {
		controller: 'BoardController', templateUrl: 'view/board.html'
	}).when('/board/:boardId', {
		controller: 'BoardController', templateUrl: 'view/board.html'
	}).when('/addBoard', {
		controller: 'AddBoardController', templateUrl: 'view/addBoard.html'
	}).otherwise( { redirectTo: '/home'} );
};
var Chat = angular.module('Chat', []).config(chatConfig);