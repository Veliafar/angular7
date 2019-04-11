import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  addCarStatus = '';
  inputText = '';

  constructor() {
  }

  ngOnInit() {
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена!';
  }

  onKeyUp(event) {
    console.log(event);
    this.inputText = event.target.value;
  }

}
