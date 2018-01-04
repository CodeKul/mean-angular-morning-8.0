import { Calc } from './clc';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RvService {

    constructor(
        private http: HttpClient
    ) {

    }

    rvws(onRvs: (dt) => void) {
        this.http.get('http://localhost:3000/rvws').subscribe(
            dt => onRvs(dt),
            err => console.log(err),
            () => console.log(`Completed The Event`)
        )
    }

    calc(clc: Calc, onClc: (res) => void) {
        this.http.post('http://localhost:3000/calcv2', clc).subscribe(
            dt => onClc(dt),
            err => console.log(err),
            () => console.log(`on Complete`)
        );
    }
}