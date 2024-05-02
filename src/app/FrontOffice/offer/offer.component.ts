import { Component, OnInit, HostListener  } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { CookieService } from 'ngx-cookie-service';
interface ElementInfo {
  id: string;
  time: number;
}
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent implements OnInit {
  offers:any[]=[];
   approved :string='';
  scrollingStartTime: number=0;
  info:ElementInfo[]=[];

  constructor(private cookie:CookieService,private offerservice:OfferService){
    this.approved='ACTIVE';

  }
  ngOnInit(): void {
   // this.getoffers();
   this.status(this.approved);
   
   console.log(JSON.parse(this.cookie.get('info')));

  }
  getoffers(){
    this.offerservice.showAll().subscribe({
      next: (data) => {
        this.offers = data;
  
        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error)
    });
  }
  status(status: string) {
    
    this.offerservice.bystaus(status).subscribe({
      next: (data) => {
        this.offers = data;
        console.log('get stautus:', data);

      },
      error: (error) => console.error('error getting status', status)
    });
    
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.scrollingStartTime) {
      this.scrollingStartTime = Date.now();
      
    }
    const topElementInfo = this.getTopElementInfo();
    this.cookie.set('info', JSON.stringify(this.info));
    console.log('Top element ID:', topElementInfo.id);
    console.log('Time at top:', topElementInfo.time);
  }
 
     getTopElementInfo(): ElementInfo {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const elements = document.querySelectorAll('.card'); // Assuming this is the class of your offer elements
  
      let topElementId = '';
      let minDistance = Number.MAX_SAFE_INTEGER;
  
      elements.forEach((element: any) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - scrollTop);
  
        if (distance < minDistance) {
          minDistance = distance;
          topElementId = element.id;
        }
      });
  
      const currentTime = Date.now();
      const timeInSeconds = (currentTime - this.scrollingStartTime) / 1000;
       this.info.push({ id: topElementId, time:timeInSeconds })
      return { id: topElementId, time:timeInSeconds };
  
      
    }
    onSearch(event: any): void {
      const searchTerm = event?.target?.value ?? '';
      if (searchTerm.trim() !== '') {
        // Si le terme de recherche n'est pas vide, déclenchez la recherche
        this.search(searchTerm);
      } else {
        // Si le terme de recherche est vide, effacez les résultats de la recherche
        // Implémentez cette logique selon vos besoins
        console.log('Le terme de recherche est vide');
      }
    }
  
    search(searchTerm: string): void {
      // Implémentez ici la logique de recherche
      this.cookie.set('search',searchTerm);
      console.log(this.cookie.get('search'));
      console.log('Recherche effectuée pour:', searchTerm);
      // Vous pouvez appeler une fonction de recherche ou effectuer d'autres opérations avec searchTerm
    }
}
