import { Component, OnInit, ViewChild } from '@angular/core';
import { FormulaeService } from './formulae.service';
import { Observable } from "rxjs/Observable";
import { ChartComponent } from 'angular2-chartjs';
import { Headers, Http } from '@angular/http';
import { Formula } from './formula'
import { DataPoint } from './dataPoint'
import { ChartService } from '../chart/chart.service';
import 'mathjs';

@Component({
    selector: 'breach-formulae',
    templateUrl: './formulae.component.html',
    providers: [ChartService]
})

export class FormulaeComponent implements OnInit {

    formulae: Formula[];
    selectedFormula: Formula;

    constructor(
        private formulaeService: FormulaeService, private chartService: ChartService, private http: Http
    ) {}

    getFormulae(): void {
        this.formulaeService.getFormulae().then(
            formulae => {
                this.formulae = formulae
                this.selectedFormula = this.formulae[0];
                this.formulaeService.selectFormula(this.selectedFormula)
            }
        );
    }

    onSelectionChange(formula:Formula) {
        this.selectedFormula = formula;
        this.formulaeService.selectFormula(this.selectedFormula);
    }
    
    onCalculateFormula() {
        //need to figure out mean, std
        var values, std, mean;
        values = this.chartService.getDataArray('Hw');
        mean = math.mean(values);
        std = math.std(values);

        var dataPoint = new DataPoint(
            values.length + 1, (1 - mean)/std
        );

        this.formulaeService.calculateFormula(dataPoint);
    }

    ngOnInit(): void {
        this.getFormulae();
    }
}