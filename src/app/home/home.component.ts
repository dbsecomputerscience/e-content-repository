import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableDataService } from '../services/observable-data.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [
    {image: '../../assets/images/1.jpg', caption: 'E-Content Repository'},
    {image: '../../assets/images/2.jpg', caption: 'Place for All Digital Resources'},
    {image: '../../assets/images/3.jpg', caption: 'Interactive Worksheets & Quizes'},
    {image: '../../assets/images/4.jpg', caption: 'For both Students & Teachers'},
  ];

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(private router: Router, private observableDataService:ObservableDataService, config: NgbCarouselConfig) {

    this.observableDataService.headerVisible.next(true);

     config.interval = 2500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

}
