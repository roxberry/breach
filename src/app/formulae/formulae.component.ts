import { Component, OnInit, ViewChild } from '@angular/core';
import { FormulaeService } from './formulae.service';
import { Observable } from "rxjs/Observable";
import { ChartComponent } from 'angular2-chartjs';
import { Headers, Http } from '@angular/http';
import { BreachFormula } from './breachFormula';
import { BreachFormulaVariables } from './breachFormulaVariables'
import { DataPoint } from './dataPoint'
import { ChartService } from '../chart/chart.service';
import 'mathjs';

@Component({
    selector: 'breach-formulae',
    templateUrl: './formulae.component.html',
    providers: [ChartService]
})

export class FormulaeComponent implements OnInit {

    formulae: BreachFormula[];
    selectedFormula: BreachFormula;
    
    constructor(
        private formulaeService: FormulaeService, private chartService: ChartService, private http: Http
    ) {}

    getFormulae(): void {
        this.formulaeService.getFormulae().then(
            formulae => {
                this.formulae = formulae
                this.selectedFormula = this.formulae[0];
                //this.formulaeService.selectFormula(this.selectedFormula)
            }
        );
    }

    onSelectionChange(formula:BreachFormula) {
        this.selectedFormula = formula;
        this.formulaeService.selectFormula(this.selectedFormula);
    }
    
    onCalculateFormula(formula:BreachFormula) {
        //need to figure out mean, std

        var data;

        this.chartService.getDataset(formula.datasetPath).then(
            dataset => {
     
                if (formula.variables.usesHeight && !formula.variables.usesVolume)
                {
                    var values, std, mean;
                    values = dataset.datasets[0].data.map(x => x.height);
                    mean = math.mean(values);
                    std = math.std(values);
        
                    this.formulaeService.calculateFormula((formula.variables.height - mean)/std);
                }
                else if (formula.variables.usesHeight && formula.variables.usesVolume)
                {
                    var heightValues, heightStd, heightMean;
                    var volValues, volStd, volMean;
                    
                    heightValues = dataset.datasets[0].data.map(x => x.height)
                    heightMean = math.mean(heightValues);
                    heightStd = math.std(heightValues);
        
                    volValues = dataset.datasets[0].data.map(x => x.volume);
                    volMean = math.mean(volValues);
                    volStd = math.std(volValues);
        
                    var dataPoint = new DataPoint(
                        (formula.variables.volume - volMean)/volStd,
                        (formula.variables.height - heightMean)/heightStd
                    )
        
                    this.formulaeService.calculateFormula(dataPoint);
                }
        });
    }

    ngOnInit(): void {
        this.getFormulae();
    }
}