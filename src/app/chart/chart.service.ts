import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartService {

  constructor(private http: Http) {
  }

  getDataset(datasetPath: string):Promise<any> {

    var url = 'data/datasets/' + datasetPath + '.json';

    return this.http.get(url)
      .toPromise()
      .then(res => JSON.parse(res.text()));
  }

  getDataArray(variable) {
    var data = {}
    data['Hw'] = [-2,-1,0,1,2];
    return data[variable];
  }

}