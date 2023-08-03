import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()

export class UsersService {

    constructor(private http: HttpClient) { }

    getUsers() { }

    getUser(userId: number) { }

    createUser(userInfo: any) { }

    updateUser(userInfo: any) { }

    deleteUser(userId: number) { }

    private handleError(error: Response) {
        console.log(error);
        const msg = 'Error status code' + error.status + 'status' + error.statusText;
        return throwError(msg);
    }
}