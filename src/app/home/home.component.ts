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
    {image: 'https://www.mindforest.com/wp-content/uploads/2020/11/PARCC-Results_R1-1.jpg', caption: 'E-Content Repository'},
    {image: 'https://vibe.us/blog/digital-literacy/image-1_hu343a1981a25cf7d7f4344f2ac5c1f4e7_163495_1400x0_resize_q90_lanczos.1c905a599b7dd59d07697b8bccf19ab6c71f9ab9db2742fd85e9d475c01cf043.jpg', caption: 'Place for All Digital Resources'},
    {image: 'https://digitallearning.eletsonline.com/wp-content/uploads/2018/03/BLD-Digital-Literacy-2017.jpg', caption: 'Interactive Worksheets & Quizes'},
    {image: 'https://circindia.org/wp-content/uploads/2015/03/Information-services.jpg', caption: 'For both Students & Teachers'},
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
