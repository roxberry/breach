import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BreachChartComponent } from './chart/chart.component';
import { FormulaeComponent } from './formulae/formulae.component';
import { ChartModule } from 'angular2-chartjs';
import { Chart } from 'chart.js';
import { HttpModule } from '@angular/http';
import { FormulaeService } from './formulae/formulae.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormulaeComponent,
    BreachChartComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    ChartModule,
    HttpModule
  ],
  providers: [FormulaeService],
  bootstrap: [
    AppComponent,
    FormulaeComponent,
    BreachChartComponent]
})

export class AppModule { }
