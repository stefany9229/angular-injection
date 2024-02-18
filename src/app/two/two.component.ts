import { Component } from '@angular/core';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  constructor(private showService: ShowService) { }

  get items() {
     return this.showService.items;
  }

}
