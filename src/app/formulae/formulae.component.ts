import { Component, OnInit, ViewChild } from '@angular/core';
import { FormulaeService } from './formulae.service';
import { Observable } from "rxjs/Observable";
import { ChartComponent } from 'angular2-chartjs';
import { Headers, Http } from '@angular/http';
import { Formula } from './formula'
import { DataPoint } from './dataPoint'

@Component({
    selector: 'breach-formulae',
    templateUrl: './formulae.component.html',
    providers: []
})

export class FormulaeComponent implements OnInit {

    formulae: Formula[];
    selectedFormula: Formula;

    constructor(
        private formulaeService: FormulaeService, private http: Http
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
        var dataPoint = new DataPoint(
            Math.floor((Math.random() * 25) + 1), Math.floor((Math.random() * 5) + 1)
        );
        this.formulaeService.calculateFormula(dataPoint);
    }

    ngOnInit(): void {
        this.getFormulae();
    }
}