import { Component } from '@angular/core';
import {Person} from './models/Person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bdd-test';
  clickMessage: string;

  people: Person[] = [
    {
      name: 'Nicolle',
      state: 'MO',
      favoriteColor: 'green'
    },
    {
      name: 'David',
      state: 'MO',
      favoriteColor: 'blue'
    },
    {
      name: 'Jane',
      state: 'FL',
      favoriteColor: 'purple'
    },
    {
      name: 'Samuel',
      state: 'OR',
      favoriteColor: 'orange'
    }
  ];

  public displayText() {
    this.clickMessage = 'Hi there!';
  }
}
