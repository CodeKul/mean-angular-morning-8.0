import { RvService } from './rv.service';
import { Component, OnInit } from '@angular/core';
import { Review } from './rvw';
import { Calc, Res } from './clc';

@Component({
  selector: 'app-rvw',
  templateUrl: './rvw.component.html',
  styleUrls: ['./rvw.component.css'],
  providers: [RvService]
})
export class RvwComponent implements OnInit {

  rvws: Array<Review>
  rs: Res;

  constructor(
    private rvSr: RvService
  ) {
    this.rvws = new Array()


    // let rv1 = new Review(5, 'xyz', 'its good', '15-06-96' );
    // this.rvws.push(rv1)

    // let rv2 = new Review(2, 'pqr', 'its really good', '15-06-98' );
    // this.rvws.push(rv2)

    // let rv3 = new Review(5, 'abc', 'its nice and good', '15-06-99' );
    // this.rvws.push(rv3)

    // let rv4 = new Review(5, 'uvw', 'its awesome', '15-06-96' );
    // this.rvws.push(rv4)
  }

  ngOnInit() {
    this.rvSr.rvws(dt => this.rvws = dt as Array<Review>);
  }

  onCalc(num1: number, operation: string, num2: number) {
    let clc: Calc = new Calc();
    clc.num1 = num1;
    clc.operation = operation;
    clc.num2 = num2;

    this.rvSr.calc(clc,  res => this.rs = res as Res);
  }
}
