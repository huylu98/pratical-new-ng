import {Component, OnInit} from '@angular/core';

interface People {
  name: string;
  age: number;
  city?: string;
}

interface PeopleByCity {
  city: string;
  people: People[];
}

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
  cities!: string[];
  people: People[] = [];
  peopleByCity!: PeopleByCity[];

  constructor() {
  }

  ngOnInit(): void {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      {name: 'Anderson', age: 35, city: 'Sao Paulo'},
      {name: 'John', age: 12, city: 'Miami'},
      {name: 'Peter', age: 22, city: 'New York'}
    ];
    this.peopleByCity = [
      {city: 'Miami', people: [{name: 'John', age: 12}, {name: 'Angel', age: 22}]},
      {city: 'Sao Paulo', people: [{name: 'Anderson', age: 35}, {name: 'Felipe', age: 36}]}
    ];
  }
}
