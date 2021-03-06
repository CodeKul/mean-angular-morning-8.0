import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lgn',
  templateUrl: './lgn.component.html',
  styleUrls: ['./lgn.component.css']
})
export class LgnComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(usNm: string, pass: string) {
    this.router.navigate(['dash', usNm], {
      queryParams: {
        id: 1234,
        page: 1,
        cnt: 50
      }
    })
  }
}
