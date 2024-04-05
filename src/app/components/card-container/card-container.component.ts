import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  @Input() searchResults: any[] = [];
  
  constructor(private router: Router) { }

  goToDetails(personId: string): void {
    this.router.navigate(['/details', personId]);
  }
}
