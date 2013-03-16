Chat.controller ('BoardsController', function ($scope, $location, $routeParams, BoardModel ) {
	var boards = BoardModel.getBoards();
	/* spurning hvort við forlykkju til að ná bara í lista af borðum en ekki chatinu sem er inn á þeim.
	for (var i = 0; i < boards.length; i++) {
		boards[i].
	};*/

	$scope.boards = boards;
	$scope.selectedBoardsId = $routeParams.boardId;
});

Chat.controller ('AddBoardController', function ($scope, $location, $routeParams, BoardModel) {
	var boardId = $routeParams.boardId;

	$scope.cancel = function () {
		$location.path('/board/');
	}

	$scope.createBoard = function () {
		BoardModel.addBoard(boardId, $scope.board.name, $scope.board.description, $scope.board.owner);
		$location.path('/board/' + boardId);
	}
});

Chat.controller('BoardController', function ($scope, $location, $routeParams, BoardModel, UserModel ){
	$scope.boards = BoardModel.getBoards();
	$scope.userList = UserModel.getUsers();
});