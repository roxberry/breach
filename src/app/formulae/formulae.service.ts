import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { BreachFormula } from './breachFormula';
import { DataPoint } from './dataPoint';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormulaeService {

  constructor(private http: Http) {
  }

  getFormulae():Promise<BreachFormula[]> {

    var url = 'data/formulaeData.json';

    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as BreachFormula[])
      .catch(this.handleError);
  }

  private formulaSelected = new Subject<BreachFormula>();
  private formulaCalculated = new Subject<DataPoint>();

  formulaSelected$ = this.formulaSelected.asObservable();
  formulaCalculated$ = this.formulaCalculated.asObservable();

  selectFormula(formula: BreachFormula) {
      this.formulaSelected.next(formula);
  }

  calculateFormula(dataPoint: any) {
      this.formulaCalculated.next(dataPoint);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}