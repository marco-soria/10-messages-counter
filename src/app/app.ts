import { Component } from '@angular/core';

import { CounterComponent } from './counter/counter';
import { MessagesComponent } from './messages/messages';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CounterComponent, MessagesComponent],
})
export class AppComponent {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
