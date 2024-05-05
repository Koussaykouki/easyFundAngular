import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrl: './header-front.component.css'
})
export class HeaderFrontComponent {
  /**
   *
   */
  constructor(private router: Router) {
   
    
  }
  logout(): void {
    // Clear user data from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Redirect to login page
    this.router.navigate(['/home/login']);
  }
  @HostListener('window:scroll', [])
  onScroll():void{
    console.log('scrolling header');
  }

}
