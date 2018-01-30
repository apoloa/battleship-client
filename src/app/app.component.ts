import { Component } from '@angular/core';
import { WebSocketService } from './services/websocket.service';
import { Board } from './models/board';

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

  ngOnInit() {
    this.webSocketService
      .getMessage()
      .subscribe(msg => {
        this.msg = '1st ' + msg;
      });
  }

  login(userId: string) {
    this.webSocketService.login(userId);
  }

  increaseValue(i: number, j: number) {
    console.log(i, j);
    this.ownerBoard.increaseValue(i, j);
  }
}
