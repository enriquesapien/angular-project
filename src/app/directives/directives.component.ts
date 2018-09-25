import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayPassword = false;
  items = [];

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    // toggle display
    this.displayPassword = !this.displayPassword;

    // add element
    this.items.push(Math.random());

  }

  isValidIndex(index) {
    return index >= 4;
  }

  getColor(index) {
    if (this.isValidIndex(index)) {
      return 'blue';
    } else {
      return 'white';
    }
  }

}
