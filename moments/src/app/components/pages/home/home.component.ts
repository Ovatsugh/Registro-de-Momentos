import { Component } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';

import { environment } from 'src/app/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = '';

  // todos search
  constructor(private momentService: MomentService) { }
  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {

      const data = items.data
      
      

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
        if(!item.image) {
          item.image = 'default-image.jpg'
        }
      });
      this.allMoments = data;
      this.moments = data;
  
    });
  }

  search(event: Event): void {

    const target = event.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter(moment => {
      return moment.title.toLocaleLowerCase().includes(value);
    });

  }
}
