import Config from '../models/config.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable'; // <--- This changes from the first Example!


// RxJS operator for mapping the observable
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {

    api_url = 'http://localhost:3000';
    configUrl = `${this.api_url}/api/configs`;
    openapiUrl = `${this.api_url}/api/configs`;
    REFRESH_TEMPO = 10000;

    constructor(
        private http: HttpClient
    ) { }

    //Create config, takes a Config Object
    createConfig(config: Config): Observable<any> {

        console.log(config);
        return this.http.post(`${this.configUrl}`, config);
    }

    getNewValue(): Observable<any> {
        console.log("sending request for openapi");
        return this.http.get(`${this.openapiUrl}`);
    }

    getOpenapi(): Observable<any> {

        return Observable.interval(this.REFRESH_TEMPO)
            .switchMap(() => this.http.get(`${this.openapiUrl}`));
    }


    //Default Error handling method.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}