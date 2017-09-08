import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartService } from './chart.service';
import { FormulaeService } from '../formulae/formulae.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { ChartComponent } from 'angular2-chartjs';
import { Headers, Http } from '@angular/http';
import { Formula } from "../formulae/formula";
import { DataPoint } from "../formulae/dataPoint";
import 'chartjs-plugin-zoom'
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
            //console.log(this.chartComponent.chart.plugins)
        });
        this.dataPointSubscription = formulaeService.formulaCalculated$.subscribe(dataPoint => {
            this.addDataPoint(dataPoint);
        })
    }

    @ViewChild(ChartComponent) chart: ChartComponent;

    formulaSubscription: Subscription;
    dataPointSubscription: Subscription;

    title = '';
    formulaValue = ''
    type = 'scatter';
    data = {};
    options = {
        animation: {
            duration: 0,
            onComplete: this.onAnimationComplete
        },
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
        tooltips: {
            backgroundColor: 'rgba(0,0,0,1)',
            enabled: true,
            mode: 'point',
            callbacks: {
                label: function (tooltipItem, data) {
                    if (tooltipItem.datasetIndex === 0) {
                        return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].dam;
                    }
                    else {
                        return "User Defined";
                    }
                },
                afterLabel: function (tooltipItem, data) {

                    var x = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].x;
                    var y = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
                    return x + "," + y;
                },
                footerFontStyle: 'normal'
            }
        },
        legend: {
            display: false
        },
        pan: {
            // Boolean to enable panning
            enabled: true,

            // Panning directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow panning in the y direction
            mode: 'xy',
        },
        zoom: {
            // Boolean to enable zooming
            enabled: true,

            // Zooming directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow zooming in the y direction
            mode: 'xy'
        },
        showTooltips: false
    };

    onAnimationComplete(): void {
        if (this.chart.data != undefined && this.chart.data.datasets.length > 0) {
            //this.chart.chart.ctx.fillText(this.chart.data.datasets[0].data);
            var meta = this.chart.chart.controller.getDatasetMeta(0);
            var ds = this.chart.data.datasets[0];

            meta.data.forEach(element => {
                this.chart.chart.ctx.fillStyle = "#000000";
                this.chart.chart.ctx.fillText(ds.data[element._index].dam, element._model.x + 5, element._model.y - 5);
            });
        }
        //this.chart.chart.resetZoom();
        
    }

    ngOnInit(): void {
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

                var labels = [];

                dataset['datasets'][0].data.forEach(element => {
                    labels.push(element.dam)
                });
                dataset['datasets'][0].labels = labels;

                this.data = dataset;
                this.title = dataset['datasets'][0].label;
                this.formulaValue = formula.formulaValue;

                //this.chart.chart._plugins = this.plugins;
                this.chart.chart.update();
                this.chart.chart.resetZoom()
            }
        );
    }

    addDataPoint(dataPoint: DataPoint) {
        this.chart.data.datasets[1].data.push(dataPoint);
        this.chart.chart.update();
    }

    resetZoom() {
        this.chart.chart.resetZoom();
    }
    // onAfterDatasetsdraw(controller, easing) {
    //     var datasets = controller.data.datasets;
    //     var chart = controller.chart;
    //     var ctx = chart.ctx;
    //     var options = chart.config.options.overlay.labels;
    //     var dy = options.yOffset || 0;
    //     var meta, i, ilen, j, jlen, bar, dataset, element;

    //     if (!options.enabled) {
    //         return;
    //     }

    //     ctx.fillStyle = options.fontColor;
    //     ctx.textAlign = 'center';
    //     ctx.textBaseline = 'top';
    //     ctx.lineWidth = 0.5
    //     ctx.font = '12px "Helvetica Neue", Helvetica, Arial, sans-serif';

    //     for (i = 0, ilen = datasets.length; i < ilen; ++i) {
    //         dataset = datasets[i];
    //         if (dataset.type !== 'bar') {
    //             continue;
    //         }

    //         meta = controller.getDatasetMeta(i);
    //         for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
    //             element = meta.data[j];
    //             ctx.fillText(
    //                 dataset.data[j],
    //                 element._view.x,
    //                 element._view.y + dy);
    //         }
    //     }

    // }
}


// this.chart.chart.pluginService.register({
//     afterDatasetsDraw: function (controller, easing) {
//         var datasets = controller.data.datasets;
//         var chart = controller.chart;
//         var ctx = chart.ctx;
//         var options = chart.config.options.overlay.labels;
//         var dy = options.yOffset || 0;
//         var meta, i, ilen, j, jlen, bar, dataset, element;

//         if (!options.enabled) {
//             return;
//         }

//         ctx.fillStyle = options.fontColor;
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'top';
//         ctx.lineWidth = 0.5
//         ctx.font = '12px "Helvetica Neue", Helvetica, Arial, sans-serif';

//         for (i = 0, ilen = datasets.length; i < ilen; ++i) {
//             dataset = datasets[i];
//             if (dataset.type !== 'bar') {
//                 continue;
//             }

//             meta = controller.getDatasetMeta(i);
//             for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
//                 element = meta.data[j];
//                 ctx.fillText(
//                     dataset.data[j],
//                     element._view.x,
//                     element._view.y + dy);
//             }
//         }
//     }
// });