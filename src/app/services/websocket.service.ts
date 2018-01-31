import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Game } from '../models/game';
import { Point } from '../models/point';

@Injectable()
export class WebSocketService {

  constructor(private socket: Socket) {
  }


  login(userId: string) {
    this.socket.emit('login', userId);
  }

  startGame(opponentId: string) {
    this.socket.emit('newGame', opponentId);
  }

  sendMessage(eventName: string, msg: string) {
    console.log(msg);
    this.socket.emit(eventName, msg);
  }

  sendBoards(game: Game) {
    console.log('Send event');
    this.socket.emit('finalizedSetBoats', JSON.stringify({ id: game.id, board: game.ownerBoard.toArray() }));
  }

  sendSelectedRow(gameId, x, y) {
    console.log('Send Selected Row');
    this.socket.emit('setSelected', JSON.stringify({ id: gameId, x: x, y: y }));
  }

  getNewGameEvent(): Observable<string> {
    return this.socket
      .fromEvent('setBoats')
      .map((data: any) => {
        debugger;
        return JSON.parse(data).id;
      });
  }

  getUpdateOwnerBoard(): Observable<Point> {
    return this.socket
      .fromEvent('updateOwnerBoard')
      .map((data: any) => {
        return Point.fromJSON((JSON.parse(data)));
      });
  }

  getUpdateOpponentBoard(): Observable<Point> {
    return this.socket
      .fromEvent('updateOpponentBoard')
      .map((data: any) => {
        return Point.fromJSON((JSON.parse(data)));
      });
  }

  getTurnEvent(): Observable<void> {
    return this.socket
      .fromEvent('yourTorn')
      .map(() => {
      });
  }

  getWaitTurnEvent(): Observable<void> {
    return this.socket
      .fromEvent('waitTorn')
      .map(() => {
      });
  }

  getWinnerEvent(): Observable<void> {
    return this.socket
      .fromEvent('winner')
      .map(() => {
      });
  }

  getLoserEvent(): Observable<void> {
    return this.socket
      .fromEvent('loser')
      .map(() => {
      });
  }

  close() {
    this.socket.disconnect();
  }
}
