import { Component } from '@angular/core';

@Component({
  selector: 'app-all-template-front',
  templateUrl: './all-template-front.component.html',
  styleUrl: './all-template-front.component.css'
})
export class AllTemplateFrontComponent  {
  onChildScrolled(event: Event) {
    // Handle the scroll event emitted by the child component
    console.log('Child component scrolled:', event);
  }
}
