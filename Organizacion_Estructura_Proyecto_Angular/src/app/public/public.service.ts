import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()

export class PublicService {

    constructor(private http: HttpClient) { }

    getCharacters(): Observable<any> {
        return this.http.get('https://thronesapi.com/api/v2/Characters').pipe(
            //tap(console.log),
            catchError(this.handleError)
        );
    }

    getContinents(): Observable<any> {
        return this.http.get('https://thronesapi.com/api/v2/Continents').pipe(
            //tap(console.log),
            catchError(this.handleError)
        );
    }

    private handleError(error: Response) {
        console.log(error);
        const msg = 'Error status code' + error.status + 'status' + error.statusText;
        return throwError(msg);
    }
}