import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {
  choice!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.choice = 1;
  }

  nextChoice(): void {
    this.choice += 1;

    if (this.choice > 5) {
      this.choice = 1;
    }
  }

}
