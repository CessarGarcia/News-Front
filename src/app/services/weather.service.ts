import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class weatherService {
    apiKey: string = 'ea824ce2e03a5aa6dc4efed480e473f8';
    URL: string = '';

    constructor(private httpClient: HttpClient) { 
        this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    }

    getWeather(cityName : string){
        return this.httpClient.get(`${this.URL}${cityName}`);
    }
}