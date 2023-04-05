import { Component, OnInit } from '@angular/core';

import {weatherService} from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  /* Images */
  hot= 'https://www.widoczki.com/widoczki/2/gory-zachod-rzeka-slonca.jpeg';
  cold= 'https://i.pinimg.com/originals/d3/b6/73/d3b673296efd41a90ba96b9e29d7450d.jpg';
  weather_icon= 'https://cdn.dribbble.com/users/915711/screenshots/5827243/media/b57f741126c5fb37be6df15ab27cd53c.png';

  humidity = 'https://static.vecteezy.com/system/resources/previews/000/436/626/non_2x/vector-humidity-vetor-icon.jpg';
  max_temperature = 'https://cdn2.iconfinder.com/data/icons/weather-and-seasons-1/110/Icons__heat-512.png';
  min_temperature = 'https://cdn2.iconfinder.com/data/icons/weather-forecast-climate-vol-9-1/512/weather_forecast_coud_climate_-05-512.png';
  wind = 'https://png.pngtree.com/png-vector/20190417/ourlarge/pngtree-vector-air-blow-icon-png-image_948036.jpg';

  weather!: any;
  
  constructor(private weatherService:  weatherService){

  }

  ngOnInit(){

  }

  getWeather(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe(     
      res => {
        console.log(res);
        this.weather = res;
      },
      (err) => console.log(err)
    )
  }

  submitLocation(cityName:  HTMLInputElement){
    if(cityName.value){
      this.getWeather(cityName.value);
      cityName.value = '';
    }else{
      alert('Please insert some values');
    }
    cityName.focus();
    return false;
  }
}