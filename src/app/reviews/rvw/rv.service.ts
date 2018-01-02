import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RvService {

    constructor(
        private http : HttpClient
    ) {

    }

    rvws() {
        this.http.get('http://localhost:3000/rvws').subscribe(
            dt => console.log(dt),
            err => console.log(err),
            () => console.log(`Completed The Event`)
        )
    }
}