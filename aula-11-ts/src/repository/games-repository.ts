import { Game } from "../protocols/game-protocol";
import { db } from "../database/database";


const games: Game[] = [];

function getGames() {
  const games = db.query("SELECT * FROM games");
  return games;
}

function createGame(game: Game) {
  db.query("INSERT INTO games VALUES (title, platform) $1, $2", [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const query = 'SELECT * FROM games WHERE title = $1 AND plataforma = $2';
    const values = [game.title, game.platform];
    const result = await db.query(query, values);
    
    return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;