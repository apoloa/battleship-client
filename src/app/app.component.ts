import {Component} from '@angular/core';
import {WebSocketService} from './services/websocket.service';
import {Board} from './models/board';
import {Point} from './models/point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebSocketService]
})
export class AppComponent {
  title = 'app';
  msg: string;

  ownerBoard: Board = new Board(10);
  opponentBoard: Board = new Board(10);

  constructor(private webSocketService: WebSocketService) {
  }

  login(userId: string) {
    this.webSocketService.login(userId);
  }

  increaseValue(i: number, j: number, event: any) {
    this.ownerBoard.increaseValue(i, j, event);
  }

  applyClass(point: Point): string {
    switch (point.value) {
      case 0:
        return 'none';
      case 1:
        return 'first';
      case 2:
        return 'second';
      case 3:
        return 'third';
      case 4:
        return 'fourth';
      case 5:
        return 'five';
    }
  }

}
