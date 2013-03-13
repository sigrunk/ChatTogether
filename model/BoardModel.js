Chat.service('BoardModel', function () {
	this.getBoards = function () {
		return [{ 
			id: 0, 
			name: 'chat to me', 
			description: 'wants to chat with someone', 
			owner: 'lonely'
		},
		{ 
			id: 1, 
			name: 'school chat', 
			description: 'all about the school', 
			owner: 'ari'
		},
		{ 
			id: 2, 
			name: 'school chat 2', 
			description: 'all about the school', 
			owner: 'ari'
		},
		{ 
			id: 3, 
			name: 'school chat 3', 
			description: 'all about the school', 
			owner: 'ari'
		}]
	}

	this.addBoard = function (boardId, boardName, boardDescription, boardOwner) {
		var now = new Date();
		var board = {
			id: now,
			name: boardName,
			description: boardDescription, 
			owner: boardOwner
		}
		// spurning hvor ekki þurfi að koma þessu inn í array sem getBoard skilar. - 11.03 SIK	
	}
});