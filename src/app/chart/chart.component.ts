import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartService } from './chart.service';
import { FormulaeService } from '../formulae/formulae.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { ChartComponent } from 'angular2-chartjs';
import { Headers, Http } from '@angular/http';
import { Formula } from "../formulae/formula";
import { DataPoint } from "../formulae/dataPoint";

// new Chart(document.getElementById("chartjs-6"),
// {"type":"bubble","data":{"datasets":[{"label":"First Dataset",
// "data":[{"x":20,"y":30,"r":15},{"x":40,"y":10,"r":10}],
// "backgroundColor":"rgb(255, 99, 132)"}]}});

@Component({
    selector: 'breach-chart',
    templateUrl: './chart.component.html',
    providers: [ChartService]
})

export class BreachChartComponent implements OnInit {

    constructor(
        private chartService: ChartService, private formulaeService: FormulaeService, private http: Http
    ) {
        this.formulaSubscription = formulaeService.formulaSelected$.subscribe(formula => {
            this.loadFormula(formula);
        });
        this.dataPointSubscription = formulaeService.formulaCalculated$.subscribe(dataPoint => {
            this.addDataPoint(dataPoint);
        })
    }

    formulaSubscription: Subscription;
    dataPointSubscription: Subscription;

    @ViewChild(ChartComponent) chart: ChartComponent;

    ngOnInit(): void {
        // var url = 'data/datasets/macDonaldLangridge.json';

        //         this.http.get(url)
        //             .subscribe(res => {
        //                 this.data = JSON.parse(res.text());
        //                 this.chart.chart.update();
        //             });
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.formulaSubscription.unsubscribe();
        this.dataPointSubscription.unsubscribe();
    }

    loadFormula(formula: Formula) {
        this.chartService.getDataset(formula.datasetPath).then(
            dataset => {
                dataset['datasets'].push(
                    {
                        "label": "User Added",
                        "data": [],
                        "showLine": false,
                        "pointStyle": "circle",
                        "pointRadius": 15,
                        "pointBackgroundColor": "red",
                        "borderColor": "red" 
                    }
                );
                this.data = dataset;
                this.title = dataset['datasets'][0].label;
                this.formulaValue = formula.formulaValue;
                this.chart.chart.update();
            }
        );
    }

    addDataPoint(dataPoint: DataPoint) {
        this.chart.data.datasets[1].data.push(dataPoint);
        this.chart.chart.update();
    }

    // onLoadDataset(): void {
    //     var url = 'data/datasets/bureauOfReclamationData.1.json';

    //             this.http.get(url)
    //                 .subscribe(res => {
    //                     console.log(res.text());
    //                     this.data = JSON.parse(res.text());
    //                     this.chart.chart.update();
    //                 });
    // };

    title = '';
    formulaValue = ''
    type = 'scatter';
    data = {};
    options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'top'
            }],
            yAxes: [{
                max: 10,
                min: -10,
                stepSize: 0.01
            }]
        },
        legend: {
            display: false,
            labels: {
                display: false
            }
        }
    };
}
