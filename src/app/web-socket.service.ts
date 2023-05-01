import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Client, Message, StompSubscription } from '@stomp/stompjs';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient!:Client;

  constructor() { }

  public connect(): void {
    const socket = new WebSocket('ws://localhost:8080/testchat');
    this.stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (msg: string) => console.log(msg)
    });
    this.stompClient.activate();
  }

  public disconnect(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }

  public subscribe(topic: string, callback: (message: Message) => void): StompSubscription {
    return this.stompClient.subscribe(topic, callback);
  }

  public send(topic: string, message: any): void {
    this.stompClient.publish({ destination: topic, body: JSON.stringify(message) });
  }
}
