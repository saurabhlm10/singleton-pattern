import { gameManager } from "./store";

setInterval(() => {
  gameManager.addGame(Math.random().toString());
}, 5000);
