import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  addCarStatus = false;
  carName = '';

  constructor() {
  }

  ngOnInit() {
  }

  addCar() {
   this.addCarStatus = true;
  }
}
