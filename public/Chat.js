var chatConfig = function  ($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'UserController', templateUrl: 'view/chooseNickname.html'
	}).when('/board', {
		controller: 'BoardsController', templateUrl: 'view/boards.html'
	}).when('/board/:boardId', {
		controller: 'BoardController', templateUrl: 'view/board.html'
	}).when('/addBoard', {
		controller: 'AddBoardController', templateUrl: 'view/addBoard.html'
	}).otherwise( { redirectTo: '/home'} );
};
var ChatServer = angular.module('Chat', []).config(chatConfig);
var socket = io.connect('http://localhost');