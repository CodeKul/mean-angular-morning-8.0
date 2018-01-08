import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatServiceService {

  private socket : any;

  constructor(

  ) { 
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', () => console.log())
  }
}
