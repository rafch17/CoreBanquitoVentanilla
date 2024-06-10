import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit {
  activeLink: string = ''; // Variable para almacenar el enlace activo


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.router.url; // Variable para almacenar el enlace activo
    console.log(this.activeLink);
    
  }
  

  setActiveLink(link: string): void {
    this.activeLink = link; // Función para establecer el enlace activo
  }
  toggleSubmenu(link: string) {
    if (this.activeLink != link) {
      this.activeLink = '';
    } else {
      this.activeLink = link;
    }
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
