interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

class GameManager {
  private static instance: GameManager;
  private static pi = 3.14;
  games: Game[] = [];

  private constructor() {
    this.games = [];
  }

  static getInstance() {
    if (GameManager.instance) return GameManager.instance;
    else {
      GameManager.instance = new GameManager();
      return GameManager.instance;
    }
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);

    const game = this.games.find((game) => game.id === gameId);

    game?.moves.push(move);
  }

  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "Denzel",
      moves: [],
    };

    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}

export const gameManager = GameManager.getInstance();
