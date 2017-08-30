import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { Formula } from './formula';
import { DataPoint } from './dataPoint';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormulaeService {

  constructor(private http: Http) {
  }

  getFormulae():Promise<Formula[]> {

    var url = 'data/formulaeData.json';

    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Formula[])
      .catch(this.handleError);
  }

  private formulaSelected = new Subject<Formula>();
  private formulaCalculated = new Subject<DataPoint>();

  formulaSelected$ = this.formulaSelected.asObservable();
  formulaCalculated$ = this.formulaCalculated.asObservable();

  selectFormula(formula: Formula) {
      this.formulaSelected.next(formula);
  }

  calculateFormula(dataPoint: DataPoint) {
      this.formulaCalculated.next(dataPoint);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}