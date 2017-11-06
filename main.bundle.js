webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>{{ title }}</h1>\n  </div>\n</div> -->\n<nav class=\"navbar navbar-default navbar-static-top mb-4\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/logo.png\" class=\"logo d-inline-block align-top\"/>BREACH</a>\n    </div>\n  </nav>\n<div class=\"container chart-container\">\n\n  <div class=\"row flex-column-reverse flex-md-row\">\n      <div class=\"col-md-3 hidden-md-down left-side\">\n          <breach-formulae></breach-formulae>\n        </div>\n      <div class=\"col-md-9\">\n          <breach-chart></breach-chart>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'BREACH';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formulae_formulae_component__ = __webpack_require__("../../../../../src/app/formulae/formulae.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__formulae_formulae_service__ = __webpack_require__("../../../../../src/app/formulae/formulae.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__formulae_formulae_component__["a" /* FormulaeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chart_chart_component__["a" /* BreachChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__formulae_formulae_service__["a" /* FormulaeService */]],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__formulae_formulae_component__["a" /* FormulaeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chart_chart_component__["a" /* BreachChartComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3 right-side\">\n    <div class=\"card-body chart-control\" [hidden]=\"!chartSelected\"\n    >\n        <div class=\"card-title row justify-content-between\"><h4 class=\"col-xs-8\">{{title}}</h4><button (click)=\"resetZoom()\" class=\"col-xs-2 mr-4\">Reset</button></div>\n        <chart class=\"breach-chart\" [type]=\"type\" [data]=\"data\" [options]=\"options\"></chart>\n    </div>\n    <div class=\"no-chart-control\" [hidden]=\"chartSelected\"\n    >\n        <h3>Select a formula</h3>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreachChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_service__ = __webpack_require__("../../../../../src/app/chart/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulae_formulae_service__ = __webpack_require__("../../../../../src/app/formulae/formulae.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom__ = __webpack_require__("../../../../chartjs-plugin-zoom/src/chart.zoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chartjs_plugin_zoom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// new Chart(document.getElementById("chartjs-6"),
// {"type":"bubble","data":{"datasets":[{"label":"First Dataset",
// "data":[{"x":20,"y":30,"r":15},{"x":40,"y":10,"r":10}],
// "backgroundColor":"rgb(255, 99, 132)"}]}});
var BreachChartComponent = (function () {
    function BreachChartComponent(chartService, formulaeService, http) {
        var _this = this;
        this.chartService = chartService;
        this.formulaeService = formulaeService;
        this.http = http;
        this.formulaSubscription = formulaeService.formulaSelected$.subscribe(function (formula) {
            _this.loadFormula(formula);
            //console.log(this.chartComponent.chart.plugins)
        });
        this.dataPointSubscription = formulaeService.formulaCalculated$.subscribe(function (dataPoint) {
            _this.addDataPoint(dataPoint);
        });
    }
    BreachChartComponent.prototype.loadBarChart = function (title, formula, dataset) {
        this.title = title;
        this.formulaValue = formula.formulaValue;
        this.type = 'bar';
        dataset.labels = dataset.datasets[0].data.map(function (x) { return x.dam; });
        var mapdata = [];
        if (formula.variables.usesHeight) {
            mapdata = dataset.datasets[0].data.map(function (x) { return x.normalizedHeight; });
        }
        if (formula.variables.usesStorage) {
            mapdata = dataset.datasets[0].data.map(function (x) { return x.normalizedStorage; });
        }
        if (formula.variables.usesLength) {
            mapdata = dataset.datasets[0].data.map(function (x) { return x.normalizedLength; });
        }
        dataset.datasets[0].data = mapdata;
        this.data = dataset;
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: true,
                        ticks: {
                            stepSize: .01
                        }
                    }]
            },
            tooltips: {
                scaleShowValues: true,
                backgroundColor: 'rgba(0,0,0,1)',
                enabled: true,
                mode: 'nearest',
                callbacks: {
                    title: function (tooltipItem, data) {
                        if (tooltipItem[0].datasetIndex === 0) {
                            return tooltipItem[0].xLabel;
                        }
                        else {
                            return "User Defined";
                        }
                    },
                    footerFontStyle: 'normal'
                }
            },
            legend: {
                display: true
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
            showTooltips: true
        };
    };
    BreachChartComponent.prototype.loadScatterPlot = function (title, formula, dataset, mapdata) {
        this.title = title;
        this.formulaValue = formula.formulaValue;
        this.type = 'scatter';
        dataset.datasets[0].data = mapdata;
        this.data = dataset;
        this.options = {
            // animation: {
            //     duration: 0,
            //     onComplete: this.onAnimationComplete
            // },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        type: 'linear',
                        position: 'top',
                        display: true,
                        min: 1,
                        max: 1,
                        stepSize: 1
                    }],
                yAxes: [{
                        beginAtZero: true,
                        stepSize: 100000,
                        min: 0,
                        max: 1
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
                    title: function (tooltipItem, data) {
                        if (tooltipItem.datasetIndex > 0) {
                            return "User Defined";
                        }
                        else {
                            return tooltipItem.title;
                        }
                    },
                    footerFontStyle: 'normal'
                }
            },
            legend: {
                display: true
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
        // this.chart.chart.update();
        // this.chart.chart.resetZoom()
    };
    BreachChartComponent.prototype.onAnimationComplete = function () {
        var _this = this;
        if (this.chart.data != undefined && this.chart.data.datasets.length > 0) {
            //this.chart.chart.ctx.fillText(this.chart.data.datasets[0].data);
            var meta = this.chart.chart.controller.getDatasetMeta(0);
            var ds = this.chart.data.datasets[0];
            meta.data.sort(function (a, b) {
                return a._model.x - b._model.x;
            });
            meta.data.forEach(function (element) {
                _this.chart.chart.ctx.fillStyle = "#000000";
                _this.chart.chart.ctx.fillText(ds.data[element._index].dam, element._model.x + 10, element._model.y - 5);
            });
        }
        //this.chart.chart.resetZoom();
    };
    BreachChartComponent.prototype.ngOnInit = function () {
    };
    BreachChartComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.formulaSubscription.unsubscribe();
        this.dataPointSubscription.unsubscribe();
    };
    BreachChartComponent.prototype.loadFormula = function (formula) {
        var _this = this;
        this.chart.chart.destroy();
        this.chartService.getDataset(formula.datasetPath).then(function (dataset) {
            if (formula.variables.usesHeight && formula.variables.usesVolume) {
                dataset['datasets'].push({
                    "label": "User Added",
                    "data": [],
                    "showLine": false,
                    "pointStyle": "circle",
                    "pointRadius": 15,
                    "pointBackgroundColor": "red",
                    "backgroundColor": "red",
                    "borderColor": "red"
                });
                var labels = [];
                dataset['datasets'][0].data.forEach(function (element) {
                    labels.push(element.dam);
                });
                dataset['datasets'][0].labels = labels;
                var mapdata = [];
                dataset.datasets[0].data.forEach(function (p) {
                    mapdata.push({ x: p.normalizedVolume, y: p.normalizedHeight, dam: p.dam });
                });
                _this.loadScatterPlot(dataset['datasets'][0].label, formula, dataset, mapdata);
            }
            else if (formula.variables.usesWidth && formula.variables.usesVolume) {
                dataset['datasets'].push({
                    "label": "User Added",
                    "data": [],
                    "showLine": false,
                    "pointStyle": "circle",
                    "pointRadius": 15,
                    "pointBackgroundColor": "red",
                    "backgroundColor": "red",
                    "borderColor": "red"
                });
                var labels = [];
                dataset['datasets'][0].data.forEach(function (element) {
                    labels.push(element.dam);
                });
                dataset['datasets'][0].labels = labels;
                var mapdata = [];
                dataset.datasets[0].data.forEach(function (p) {
                    mapdata.push({ x: p.normalizedVolume, y: p.normalizedWidth, dam: p.dam });
                });
                _this.loadScatterPlot(dataset['datasets'][0].label, formula, dataset, mapdata);
            }
            else if (formula.variables.usesWidth && formula.variables.usesHeight) {
                dataset['datasets'].push({
                    "label": "User Added",
                    "data": [],
                    "showLine": false,
                    "pointStyle": "circle",
                    "pointRadius": 15,
                    "pointBackgroundColor": "red",
                    "backgroundColor": "red",
                    "borderColor": "red"
                });
                var labels = [];
                dataset['datasets'][0].data.forEach(function (element) {
                    labels.push(element.dam);
                });
                dataset['datasets'][0].labels = labels;
                var mapdata = [];
                dataset.datasets[0].data.forEach(function (p) {
                    mapdata.push({ x: p.normalizedWidth, y: p.normalizedHeight, dam: p.dam });
                });
                _this.loadScatterPlot(dataset['datasets'][0].label, formula, dataset, mapdata);
            }
            else if (formula.variables.usesLength && formula.variables.usesVolume) {
                dataset['datasets'].push({
                    "label": "User Added",
                    "data": [],
                    "showLine": false,
                    "pointStyle": "circle",
                    "pointRadius": 15,
                    "pointBackgroundColor": "red",
                    "backgroundColor": "red",
                    "borderColor": "red"
                });
                var labels = [];
                dataset['datasets'][0].data.forEach(function (element) {
                    labels.push(element.dam);
                });
                dataset['datasets'][0].labels = labels;
                var mapdata = [];
                dataset.datasets[0].data.forEach(function (p) {
                    mapdata.push({ x: p.normalizedVolume, y: p.normalizedLength, dam: p.dam });
                });
                _this.loadScatterPlot(dataset['datasets'][0].label, formula, dataset, mapdata);
            }
            else if (formula.variables.usesLength && formula.variables.usesHeight) {
                dataset['datasets'].push({
                    "label": "User Added",
                    "data": [],
                    "showLine": false,
                    "pointStyle": "circle",
                    "pointRadius": 15,
                    "pointBackgroundColor": "red",
                    "backgroundColor": "red",
                    "borderColor": "red"
                });
                var labels = [];
                dataset['datasets'][0].data.forEach(function (element) {
                    labels.push(element.dam);
                });
                dataset['datasets'][0].labels = labels;
                var mapdata = [];
                dataset.datasets[0].data.forEach(function (p) {
                    mapdata.push({ x: p.normalizedHeight, y: p.normalizedLength, dam: p.dam });
                });
                _this.loadScatterPlot(dataset['datasets'][0].label, formula, dataset, mapdata);
            }
            else if ((formula.variables.usesHeight || formula.variables.usesStorage || formula.variables.usesLength)
                && (!formula.variables.usesVolume && !formula.variables.usesWidth)) {
                dataset['datasets'].push({
                    "label": "User Added",
                    "data": [],
                    "borderWidth": 1,
                    "backgroundColor": "red",
                    "borderColor": "red"
                });
                _this.loadBarChart(dataset['datasets'][0].label, formula, dataset);
            }
        });
        this.chartSelected = true;
    };
    BreachChartComponent.prototype.addDataPoint = function (dataPoint) {
        this.chart.data.datasets[1].data.push(dataPoint);
        this.chart.chart.update();
    };
    BreachChartComponent.prototype.resetZoom = function () {
        this.chart.data.datasets[1].data = [];
        this.chart.chart.update();
        this.chart.chart.resetZoom();
    };
    return BreachChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartComponent"]) === "function" && _a || Object)
], BreachChartComponent.prototype, "chart", void 0);
BreachChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'breach-chart',
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__chart_service__["a" /* ChartService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chart_service__["a" /* ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chart_service__["a" /* ChartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__formulae_formulae_service__["a" /* FormulaeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__formulae_formulae_service__["a" /* FormulaeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _d || Object])
], BreachChartComponent);

var _a, _b, _c, _d;
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
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartService = (function () {
    function ChartService(http) {
        this.http = http;
    }
    ChartService.prototype.getDataset = function (datasetPath) {
        var url = 'data/datasets/' + datasetPath + '.json';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return JSON.parse(res.text()); });
    };
    return ChartService;
}());
ChartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ChartService);

var _a;
//# sourceMappingURL=chart.service.js.map

/***/ }),

/***/ "../../../../../src/app/formulae/dataPoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPoint; });
var DataPoint = (function () {
    function DataPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return DataPoint;
}());

//# sourceMappingURL=dataPoint.js.map

/***/ }),

/***/ "../../../../../src/app/formulae/formulae.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n        <div id=\"breach-formula-calculator\" class=\"card mb-3\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Calculator</h4>\n                <p [innerHtml]= selectedFormula?.formulaValue ></p>\n                <div *ngIf=\"selectedFormula?.variables.usesVolume\" class=\"input-group input-group-lg mb-2\">\n                        <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.volumeLabel\"></span>\n                        <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedFormula?.variables.volume\" placeholder=\"Volume\" aria-label=\"Volume\" aria-describedby=\"sizing-addon1\">\n                        <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.volumeUom\"></span>\n                </div>\n                <div *ngIf=\"selectedFormula?.variables.usesHeight\" class=\"input-group input-group-lg mb-2\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.heightLabel\"></span>\n                    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedFormula?.variables.height\" placeholder=\"Height\" aria-label=\"Height\" aria-describedby=\"sizing-addon1\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.heightUom\"></span>\n                    \n                </div>\n                <div *ngIf=\"selectedFormula?.variables.usesStorage\" class=\"input-group input-group-lg mb-2\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.storageLabel\"></span>\n                    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedFormula?.variables.storage\" placeholder=\"Storage\" aria-label=\"Storage\" aria-describedby=\"sizing-addon1\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.storageUom\"></span>\n                </div>\n                <div *ngIf=\"selectedFormula?.variables.usesWidth\" class=\"input-group input-group-lg mb-2\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.widthLabel\"></span>\n                    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedFormula?.variables.width\" placeholder=\"Width\" aria-label=\"Width\" aria-describedby=\"sizing-addon1\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.widthUom\"></span>                    \n                </div>\n                <div *ngIf=\"selectedFormula?.variables.usesLength\" class=\"input-group input-group-lg mb-2\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.lengthLabel\"></span>\n                    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedFormula?.variables.length\" placeholder=\"Length\" aria-label=\"Length\" aria-describedby=\"sizing-addon1\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon1\" [innerHtml]=\"selectedFormula?.lengthUom\"></span>                    \n                </div>\n                <div class=\"input-group input-group-lg mb-2\">\n                        <span class=\"input-group-addon\" id=\"sizing-addon1\">Q<sub>p</sub></span>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Peak Outflow\" aria-label=\"Peak Outflow\" aria-describedby=\"sizing-addon1\" readonly>\n                </div>\n                <button id=\"calculateFormula\" class=\"btn btn-calculate mb-2\" (click)=\"onCalculateFormula(selectedFormula)\">Plot</button>\n            </div>\n        </div>\n        <div id=\"breach-formula-list\" class=\"card mb-3\">\n            <div class=\"card-body\">\n\n                <h4 class=\"card-title\">Formulae / Datasets</h4>\n                <ul class=\"nav flex-column\">\n                    <li *ngFor=\"let formula of formulae\">\n                        <a  *ngIf=\"formula.active\" href=\"#\" (click)=\"onSelectionChange(formula)\" class=\"listFormulaName\" [innerHtml]=formula.formulaName></a><br/>\n                        <p *ngIf=\"formula.active\" class=\"listFormulaValue\" [innerHtml]=formula.formulaValue></p>\n                    </li>\n                </ul>\n            </div>\n        </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/formulae/formulae.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formulae_service__ = __webpack_require__("../../../../../src/app/formulae/formulae.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataPoint__ = __webpack_require__("../../../../../src/app/formulae/dataPoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_chart_service__ = __webpack_require__("../../../../../src/app/chart/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mathjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormulaeComponent = (function () {
    function FormulaeComponent(formulaeService, chartService, http, sanitizer) {
        this.formulaeService = formulaeService;
        this.chartService = chartService;
        this.http = http;
        this.sanitizer = sanitizer;
    }
    FormulaeComponent.prototype.getFormulae = function () {
        var _this = this;
        this.formulaeService.getFormulae().then(function (formulae) {
            for (var i = 0; i < formulae.length; i++) {
                formulae[i].formulaValue = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].formulaValue);
                formulae[i].formulaName = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].formulaName);
                formulae[i].variables.heightUom = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.heightUom);
                formulae[i].variables.heightLabel = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.heightLabel);
                formulae[i].variables.volumeLabel = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.volumeLabel);
                formulae[i].variables.volumeUom = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.volumeUom);
                formulae[i].variables.widthLabel = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.widthLabel);
                formulae[i].variables.widthUom = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.widthUom);
                formulae[i].variables.storageLabel = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.storageLabel);
                formulae[i].variables.storageUom = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.storageUom);
                formulae[i].variables.lengthLabel = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.lengthLabel);
                formulae[i].variables.lengthUom = _this.sanitizer.bypassSecurityTrustHtml(formulae[i].variables.lengthUom);
            }
            _this.formulae = formulae;
        });
    };
    FormulaeComponent.prototype.onSelectionChange = function (formula) {
        this.selectedFormula = formula;
        this.formulaeService.selectFormula(this.selectedFormula);
    };
    FormulaeComponent.prototype.onCalculateFormula = function (formula) {
        //need to figure out mean, std
        var _this = this;
        var data;
        this.chartService.getDataset(formula.datasetPath).then(function (dataset) {
            if (formula.variables.usesHeight && !formula.variables.usesVolume && !formula.variables.usesLength) {
                var values, std, mean;
                values = dataset.datasets[0].data.map(function (x) { return x.height; });
                mean = math.mean(values);
                std = math.std(values);
                _this.formulaeService.calculateFormula((formula.variables.height - mean) / std);
            }
            else if (formula.variables.usesStorage) {
                var values, std, mean;
                values = dataset.datasets[0].data.map(function (x) { return x.storage; });
                mean = math.mean(values);
                std = math.std(values);
                _this.formulaeService.calculateFormula((formula.variables.storage - mean) / std);
            }
            else if (formula.variables.usesLength && !formula.variables.usesHeight && !formula.variables.usesVolume) {
                var values, std, mean;
                values = dataset.datasets[0].data.map(function (x) { return x.length; });
                mean = math.mean(values);
                std = math.std(values);
                _this.formulaeService.calculateFormula((formula.variables.length - mean) / std);
            }
            else if (formula.variables.usesHeight && formula.variables.usesVolume) {
                var heightValues, heightStd, heightMean;
                var volValues, volStd, volMean;
                heightValues = dataset.datasets[0].data.map(function (x) { return x.height; });
                heightMean = math.mean(heightValues);
                heightStd = math.std(heightValues);
                volValues = dataset.datasets[0].data.map(function (x) { return x.volume; });
                volMean = math.mean(volValues);
                volStd = math.std(volValues);
                var dataPoint = new __WEBPACK_IMPORTED_MODULE_3__dataPoint__["a" /* DataPoint */]((formula.variables.volume - volMean) / volStd, (formula.variables.height - heightMean) / heightStd);
                _this.formulaeService.calculateFormula(dataPoint);
            }
            else if (formula.variables.usesWidth && formula.variables.usesVolume) {
                var widthValues, widthStd, widthMean;
                var volValues, volStd, volMean;
                widthValues = dataset.datasets[0].data.map(function (x) { return x.height; });
                widthMean = math.mean(widthValues);
                widthStd = math.std(widthValues);
                volValues = dataset.datasets[0].data.map(function (x) { return x.volume; });
                volMean = math.mean(volValues);
                volStd = math.std(volValues);
                var dataPoint = new __WEBPACK_IMPORTED_MODULE_3__dataPoint__["a" /* DataPoint */]((formula.variables.volume - volMean) / volStd, (formula.variables.width - widthMean) / widthStd);
                _this.formulaeService.calculateFormula(dataPoint);
            }
            else if (formula.variables.usesLength && formula.variables.usesVolume) {
                var lengthValues, lengthStd, lengthMean;
                var volValues, volStd, volMean;
                lengthValues = dataset.datasets[0].data.map(function (x) { return x.length; });
                lengthMean = math.mean(lengthValues);
                lengthStd = math.std(lengthValues);
                volValues = dataset.datasets[0].data.map(function (x) { return x.volume; });
                volMean = math.mean(volValues);
                volStd = math.std(volValues);
                var dataPoint = new __WEBPACK_IMPORTED_MODULE_3__dataPoint__["a" /* DataPoint */]((formula.variables.volume - volMean) / volStd, (formula.variables.length - lengthMean) / lengthStd);
                _this.formulaeService.calculateFormula(dataPoint);
            }
            else if (formula.variables.usesLength && formula.variables.usesHeight) {
                var lengthValues, lengthStd, lengthMean;
                var heightValues, heightStd, heightMean;
                lengthValues = dataset.datasets[0].data.map(function (x) { return x.length; });
                lengthMean = math.mean(lengthValues);
                lengthStd = math.std(lengthValues);
                heightValues = dataset.datasets[0].data.map(function (x) { return x.height; });
                heightMean = math.mean(heightValues);
                heightStd = math.std(heightValues);
                var dataPoint = new __WEBPACK_IMPORTED_MODULE_3__dataPoint__["a" /* DataPoint */]((formula.variables.height - heightMean) / heightStd, (formula.variables.length - lengthMean) / lengthStd);
                _this.formulaeService.calculateFormula(dataPoint);
            }
        });
    };
    FormulaeComponent.prototype.ngOnInit = function () {
        this.getFormulae();
        this.selectedFormula = this.formulae[0];
        this.formulaeService.selectFormula(this.selectedFormula);
    };
    return FormulaeComponent;
}());
FormulaeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'breach-formulae',
        template: __webpack_require__("../../../../../src/app/formulae/formulae.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__chart_chart_service__["a" /* ChartService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__formulae_service__["a" /* FormulaeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__formulae_service__["a" /* FormulaeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__chart_chart_service__["a" /* ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chart_chart_service__["a" /* ChartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], FormulaeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=formulae.component.js.map

/***/ }),

/***/ "../../../../../src/app/formulae/formulae.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormulaeService = (function () {
    function FormulaeService(http) {
        this.http = http;
        this.formulaSelected = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.formulaCalculated = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.formulaSelected$ = this.formulaSelected.asObservable();
        this.formulaCalculated$ = this.formulaCalculated.asObservable();
    }
    FormulaeService.prototype.getFormulae = function () {
        var url = 'data/formulaeData.json';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FormulaeService.prototype.selectFormula = function (formula) {
        this.formulaSelected.next(formula);
    };
    FormulaeService.prototype.calculateFormula = function (dataPoint) {
        this.formulaCalculated.next(dataPoint);
    };
    FormulaeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FormulaeService;
}());
FormulaeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FormulaeService);

var _a;
//# sourceMappingURL=formulae.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map