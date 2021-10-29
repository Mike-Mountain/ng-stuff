import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '@ng-stuff/data';

@Component({
  selector: 'uns-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather | undefined;
  @Input() image = '';

  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
