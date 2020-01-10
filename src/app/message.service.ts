import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  last(): String {
    return this.messages[this.messages.length-1];
  }

  all(): string[] {
    return this.messages;
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  any(): Boolean {
    return this.messages.length > 0
  }

}