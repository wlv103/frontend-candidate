import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  personDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getPersonDetails(+id).subscribe(
        (data) => {
          this.personDetails = data;
        },
        (error) => {
          console.error('Error fetching person details:', error);
        }
      );
    }
  }

  getQuotes(quotesObj: any): { text: string, likes: number }[] {
    const quotesArray: { text: string, likes: number }[] = [];
    for (const key in quotesObj) {
      if (quotesObj.hasOwnProperty(key)) {
        quotesObj[key].forEach((quote: string) => {
          quotesArray.push({ text: quote, likes: +key });
        });
      }
    }
    quotesArray.sort((a, b) => b.likes - a.likes);
    return quotesArray;
  }
}