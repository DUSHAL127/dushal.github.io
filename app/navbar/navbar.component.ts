import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuActive = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Set isScrolled to true if window is scrolled more than 50px from top, false otherwise.
   * This is used to conditionally add the "scrolled" class to the navbar, which changes its appearance.
   */
/******  00de378e-aa26-4264-b032-a3ea5899cf51  *******/
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
  }
}
