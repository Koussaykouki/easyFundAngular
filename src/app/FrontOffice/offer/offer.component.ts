import { Component, OnInit, HostListener , OnDestroy ,Directive , Output, EventEmitter} from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { CookieService } from 'ngx-cookie-service';
import { interval, take } from 'rxjs';
import { PageViewService } from '../../services/page-view.service';
import { NavigationEnd, Router } from '@angular/router';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { MatDialog } from '@angular/material/dialog';
interface ElementInfo {
  id: string;
  time: number;
}
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent implements OnInit ,OnDestroy{
 
  offers:any[]=[];
   approved :string='';
  scrollingStartTime: number=0;
  info:ElementInfo[]=[];
  scrol:boolean=false;
  //stored:ElementInfo[]=[];
  constructor(private cookie:CookieService,private offerservice:OfferService,private PageViewService:PageViewService,private router:Router,private dialog:MatDialog){
    this.approved='ACTIVE';
    this.scrollingStartTime = Date.now();

  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.PageViewService.logPageView().subscribe(response => {
          console.log('Page view logged:', response);
        });
      }
    });
   // this.getoffers();
   this.status(this.approved);
   
   console.log(JSON.parse(this.cookie.get('info')));

  }
  
  ngOnDestroy(): void {
    this.offerservice.test(this.info);
    console.log('destroyed');
    this.addElementInfo(this.info);
  }
  ionViewWillLeave(){
    //console.log('page detruit');
    //this.cookie.set('destroy','destroyed');
    this.addElementInfo(this.info);
  }
    
    //ajouter les  données  a cookie et les trier 
  addElementInfo(elementInfoArray: ElementInfo[]): void {
    // Récupérer les données du cookie
    let cookieData = this.cookie.get('info');

    // Convertir les données en tableau d'objets ElementInfo (si elles existent)
    let dataArray: ElementInfo[] = cookieData ? JSON.parse(cookieData) : [];

    // Ajouter le tableau d'ElementInfo à la fin du tableau existant
    dataArray = dataArray.concat(elementInfoArray);
    dataArray = this.calculateTotalTimes(dataArray);
    dataArray.sort((a, b) => b.time - a.time);
    // Convertir le tableau mis à jour en chaîne JSON
    let updatedCookieData = JSON.stringify(dataArray);
    //let finalUpdate = this.calculateTotalTimes(updatedCookieData)

    // Définir le cookie avec les données mises à jour
    this.cookie.set('info', updatedCookieData, { expires: 30 });
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
  //event listener pour scrolling
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.scrollingStartTime) {
      this.scrollingStartTime = Date.now();
      
    }
   
     setTimeout(() => {
      
      
      const topElementInfo = this.getTopElementInfo();
    this.info.push({ id: topElementInfo.id,time:  topElementInfo.time })
    this.info=this.calculateTotalTimes(this.info);
    console.log(this.info);
    this.addElementInfo(this.info);//envoie de cookies
      console.log("L'écran est maintenant fixe.");
    }, 2000);
    //lazem yarja3 bch nakhedh il interval
    this.scrollingStartTime = Date.now();
    
    
    //this.cookie.set('destroy','destroyed');
    
    
    
   // this.cookie.set('info', JSON.stringify(this.info), { expires: 365 });
    
  }
      //id in topscrolling + timer
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
      //badalta lil minutes bch nsagher il data
      const timeInSeconds = (currentTime - this.scrollingStartTime) / 60000;
      
      // this.scrollingStartTime =Date.now();
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
    //calcule de temps total pour chaque offreId
    calculateTotalTimes(info: ElementInfo[]): ElementInfo[] {
      const totalTimeMap: { [id: string]: number } = {};
    
      
      info.forEach(element => {
        const id = element.id;
        const time = element.time;
    
       
        totalTimeMap[id] = (totalTimeMap[id] || 0) + time;
      });
    
      
      const result: ElementInfo[] = [];
      for (const id in totalTimeMap) {
        if (totalTimeMap.hasOwnProperty(id)) {
          result.push({ id: id, time: totalTimeMap[id] });
        }
      }
    
      return result;
    }
    openPopup(credit: any) {
      const dialogRef = this.dialog.open(OfferDetailsComponent, {
        width: '1200ox',
        data: credit
      });
    }
}
