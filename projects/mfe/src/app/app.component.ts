import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
enviarMensaje() {
  this.messageService.sendMessage('nuevo mensaje')
}
  title = 'mfe';
  lastMessage: string = '';

  constructor(private messageService: SharedLibService) {}

  ngOnInit(): void {
    this.messageService.message$.subscribe(
      message => this.lastMessage = message
    );
  }
}
