import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {HttpClient} from '@angular/common/http';
import {StocksDataService} from './stocks-data.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {


  constructor(private stocksDataService: StocksDataService) {
    this.stocksDataService.getStocks();
  }
  ngOnInit(): void {
  }
}
