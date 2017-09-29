import { Component, OnInit, ViewChild } from '@angular/core';
import { FormulaeService } from './formulae.service';
import { Observable } from "rxjs/Observable";
import { ChartComponent } from 'angular2-chartjs';
import { Headers, Http } from '@angular/http';
import { BreachFormula } from './breachFormula';
import { BreachFormulaVariables } from './breachFormulaVariables'
import { DataPoint } from './dataPoint'
import { ChartService } from '../chart/chart.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
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
        private formulaeService: FormulaeService, private chartService: ChartService, private http: Http, private sanitizer: DomSanitizer
    ) {}

    getFormulae(): void {
        this.formulaeService.getFormulae().then(
            formulae => {

                for(var i=0;i<formulae.length;i++)
                {
                    formulae[i].formulaValue = this.sanitizer.bypassSecurityTrustHtml(formulae[i].formulaValue);
                    formulae[i].formulaName = this.sanitizer.bypassSecurityTrustHtml(formulae[i].formulaName);
                    formulae[i].variables.heightLabel = this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.heightLabel);
                    formulae[i].variables.volumeLabel = this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.volumeLabel);
                    formulae[i].variables.widthLabel = this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.widthLabel);
                    formulae[i].variables.storageLabel = this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.storageLabel);
                    formulae[i].variables.lengthLabel = this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.lengthLabel);
                }
                this.formulae = formulae
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
                if (formula.variables.usesHeight && !formula.variables.usesVolume && !formula.variables.usesLength)  // H
                {
                    var values, std, mean;
                    values = dataset.datasets[0].data.map(x => x.height);
                    mean = math.mean(values);
                    std = math.std(values);
        
                    this.formulaeService.calculateFormula((formula.variables.height - mean)/std);
                }
                else if (formula.variables.usesStorage)  //S 
                {
                    var values, std, mean;
                    values = dataset.datasets[0].data.map(x => x.storage);
                    mean = math.mean(values);
                    std = math.std(values);
        
                    this.formulaeService.calculateFormula((formula.variables.storage - mean)/std);
                }
                else if (formula.variables.usesLength && !formula.variables.usesHeight && !formula.variables.usesVolume)  //L
                {
                    var values, std, mean;
                    values = dataset.datasets[0].data.map(x => x.length);
                    mean = math.mean(values);
                    std = math.std(values);
        
                    this.formulaeService.calculateFormula((formula.variables.length - mean)/std);
                }
                else if (formula.variables.usesHeight && formula.variables.usesVolume)  // H,V
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
                else if (formula.variables.usesWidth && formula.variables.usesVolume) //W, V
                {
                    var widthValues, widthStd, widthMean;
                    var volValues, volStd, volMean;
                    
                    widthValues = dataset.datasets[0].data.map(x => x.height)
                    widthMean = math.mean(widthValues);
                    widthStd = math.std(widthValues);
        
                    volValues = dataset.datasets[0].data.map(x => x.volume);
                    volMean = math.mean(volValues);
                    volStd = math.std(volValues);
        
                    var dataPoint = new DataPoint(
                        (formula.variables.volume - volMean)/volStd,
                        (formula.variables.width - widthMean)/widthStd
                    )
        
                    this.formulaeService.calculateFormula(dataPoint);
                }
                else if (formula.variables.usesLength && formula.variables.usesVolume) //L, V
                {
                    var lengthValues, lengthStd, lengthMean;
                    var volValues, volStd, volMean;
                    
                    lengthValues = dataset.datasets[0].data.map(x => x.length)
                    lengthMean = math.mean(lengthValues);
                    lengthStd = math.std(lengthValues);
        
                    volValues = dataset.datasets[0].data.map(x => x.volume);
                    volMean = math.mean(volValues);
                    volStd = math.std(volValues);
        
                    var dataPoint = new DataPoint(
                        (formula.variables.volume - volMean)/volStd,
                        (formula.variables.length - lengthMean)/lengthStd
                    )
        
                    this.formulaeService.calculateFormula(dataPoint);
                }
                else if (formula.variables.usesLength && formula.variables.usesHeight) //L, H
                {
                    var lengthValues, lengthStd, lengthMean;
                    var heightValues, heightStd, heightMean;
                    
                    lengthValues = dataset.datasets[0].data.map(x => x.length)
                    lengthMean = math.mean(lengthValues);
                    lengthStd = math.std(lengthValues);
        
                    heightValues = dataset.datasets[0].data.map(x => x.height);
                    heightMean = math.mean(heightValues);
                    heightStd = math.std(heightValues);
        
                    var dataPoint = new DataPoint(
                        (formula.variables.height - heightMean)/heightStd,
                        (formula.variables.length - lengthMean)/lengthStd
                    )
        
                    this.formulaeService.calculateFormula(dataPoint);
                }
        });
    }

    ngOnInit(): void {
        this.getFormulae();

        this.selectedFormula = this.formulae[0];
        this.formulaeService.selectFormula(this.selectedFormula);
    }
}