import { Component } from '@angular/core';

@Component({
  selector: 'app-alloffer',
  templateUrl: './alloffer.component.html',
  styleUrl: './alloffer.component.css'
})
export class AllofferComponent {
  show:boolean;
  constructor(){
    this.show=false;
  }
  financing(event:Event){
    this.show=true;

  }
  offer(event:Event){
    this.show=false;
  }

}
