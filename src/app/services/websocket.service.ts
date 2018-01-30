import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'

@Injectable()
export class WebSocketService {

  constructor(private socket: Socket) { }


  login(userId:string){
    this.socket.emit('login', userId);
  }

  sendMessage(eventName: string, msg: string){
    console.log(msg);
    this.socket.emit(eventName, msg);
  }



  getMessage() {
    return this.socket
      .fromEvent("message")
      .map( data => console.log(data));
  }

  close() {
    this.socket.disconnect()
  }
}
