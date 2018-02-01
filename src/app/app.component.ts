import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/websocket.service';
import { Board } from './models/board';
import { Point } from './models/point';
import { Game } from './models/game';
import { StatusGame } from './enums/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebSocketService]
})
export class AppComponent implements OnInit {
  title = 'app';
  msg: string;
  board: string;
  game: Game = new Game();

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit() {
    this.webSocketService.getNewGameEvent().subscribe(id => {
      this.game.initiateGame(id);
    });
    this.webSocketService.getTurnEvent().subscribe(() => {
      this.game.status = StatusGame.YourTurn;
    });
    this.webSocketService.getWaitTurnEvent().subscribe(() => {
      this.game.status = StatusGame.OpponentTurn;
    });
    this.webSocketService.getWinnerEvent().subscribe(() => {
      this.game.status = StatusGame.Winner;
    });
    this.webSocketService.getLoserEvent().subscribe(() => {
      this.game.status = StatusGame.Loser;
    });
    this.webSocketService.getUpdateOpponentBoard().subscribe((point: Point) => {
      this.game.opponentBoard.applyPoint(point);
    });
    this.webSocketService.getUpdateOwnerBoard().subscribe((point: Point) => {
      this.game.ownerBoard.applyPoint(point);
    });
  }

  login(userId: string) {
    this.webSocketService.login(userId);
  }

  selectValue(x: number, y: number) {
    if (this.game.status === StatusGame.YourTurn) {
      this.webSocketService.sendSelectedRow(this.game.id, x, y);
    }
  }

  increaseValue(i: number, j: number, event: any) {
    if (this.game.status === StatusGame.SetBoats) {
      this.game.ownerBoard.increaseValue(i, j, event);
      if (this.game.ownerBoard.complete()) {
        this.webSocketService.sendBoards(this.game);
      }
    }


  }

  startGame(opponent: string) {
    this.webSocketService.startGame(opponent);
  }

  applyClass(point: Point): string {
    let classElement = '';
    if (point.selected) {
      classElement += 'borderRed';
    }
    switch (point.value) {
      case 0:
        return classElement + ' none';
      case 1:
        return classElement + ' first';
      case 2:
        return classElement + ' second';
      case 3:
        return classElement + ' third';
      case 4:
        return classElement + ' fourth';
      case 5:
        return classElement + ' five';
    }
  }

  selected(point: Point): string {
    return point.selected ? 'none' : 'black';
  }

}
