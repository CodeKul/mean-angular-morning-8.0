import { Component, OnInit } from '@angular/core';
import { Review } from './rvw';

@Component({
  selector: 'app-rvw',
  templateUrl: './rvw.component.html',
  styleUrls: ['./rvw.component.css']
})
export class RvwComponent implements OnInit {

  rvws: Array<Review>
  constructor() { 
    this.rvws = new Array()

    /*let rv1 = new Review(5, 'xyz', 'its good', '15-06-96' );
    this.rvws.push(rv1)

    let rv2 = new Review(2, 'pqr', 'its really good', '15-06-98' );
    this.rvws.push(rv2)

    let rv3 = new Review(5, 'abc', 'its nice and good', '15-06-99' );
    this.rvws.push(rv3)

    let rv4 = new Review(5, 'uvw', 'its awesome', '15-06-96' );
    this.rvws.push(rv4)*/
  }

  ngOnInit() {
  }
}
