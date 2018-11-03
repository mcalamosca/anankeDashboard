import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

/** https://www.worldtradingdata.com/home **/
const apiToken = 'uoJVvyVGDAp76IdWSam7BCFbpNJmlhEWfV7YplP1nGknjW2M0UH6kVayZyQr';
@Injectable({
  providedIn: 'root'
})
export class StocksDataService {
  getStocks() {
    return this.http.get('https://www.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L' +
      '&api_token=' + apiToken);
  }
  constructor(private http: HttpClient) { }
}
