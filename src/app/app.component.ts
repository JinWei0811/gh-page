import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  timer: string = '';
  ngOnInit(): void {
    this.initTimer();
    setInterval(() => {
      this.initTimer();
    }, 1000);
  }

  initTimer() {
    const targetDate = new Date('2025-06-05T16:12:00');
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.timer =
      diff < 0
        ? '已經出獄了🥳🥳🥳'
        : `${hours > 9 ? hours : '0' + hours}:${
            minutes > 9 ? minutes : '0' + minutes
          }:${seconds > 9 ? seconds : '0' + seconds}`;
  }
}
