import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {
  color!: string;
  fontSize!: string;
  style!: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() {
  }

  ngOnInit(): void {
    this.fontSize = '16';
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '30px'
    };
  }

  apply(color: string, fontSize: string): void {
    this.color = color;
    this.fontSize = fontSize;
  }

}
