import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableDataService } from '../services/observable-data.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private router: Router, private observableDataService:ObservableDataService) {
    if(this.router.url === '/splash'){
      this.observableDataService.headerVisible.next(false);
    }

  }

  ngOnInit(): void {
  }

}
