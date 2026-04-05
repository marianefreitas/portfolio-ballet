import { Component, NgZone } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private ngZone: NgZone) {}

  intervalId: any;

  targetDate = new Date(2026, 3, 6, 18, 30, 0);




  dias = 0;
  horas = 0;
  minutos = 0;
  segundos = 0;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
  }

startCountdown() {
  this.ngZone.runOutsideAngular(() => {
    this.intervalId = setInterval(() => {

      const now = new Date().getTime();
      const target = this.targetDate.getTime();

      if (!target) return;

      const diff = target - now;

      let dias = 0;
      let horas = 0;
      let minutos = 0;
      let segundos = 0;

      if (diff > 0) {
        dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minutos = Math.floor((diff / (1000 * 60)) % 60);
        segundos = Math.floor((diff / 1000) % 60);
      }

      // 👇 volta pro Angular só pra atualizar a UI
      this.ngZone.run(() => {
        this.dias = dias;
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
      });

    }, 1000);
  });
}   
}
