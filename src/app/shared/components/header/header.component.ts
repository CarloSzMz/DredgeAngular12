import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isHidden = false; // Controla si el navbar está oculto
  lastScrollTop = 0; // Guarda la última posición de scroll

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // Comprobar si el usuario scrollea hacia abajo
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isHidden = true; // Ocultar el navbar
    } else {
      this.isHidden = false; // Mostrar el navbar
    }

    // Actualizar la posición del último scroll
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
