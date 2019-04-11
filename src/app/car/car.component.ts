import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carName: string = 'Ford';
  carYear: number = 2015;

  constructor() { }

  ngOnInit() {
  }

  getCarName() {
    return this.carName;
  }

}
