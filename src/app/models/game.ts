import { Board } from './board';
import { StatusGame } from '../enums/status';

export class Game {
  public id: string;
  public status: StatusGame;
  public ownerBoard: Board;
  public opponentBoard: Board;

  constructor() {
    this.id = '-1';
    this.status = StatusGame.NewGame;
    this.ownerBoard = new Board(10);
    this.opponentBoard = new Board(10);
  }

  initiateGame(id: string){
    this.id = id;
    this.status = StatusGame.SetBoats;
  }


}
