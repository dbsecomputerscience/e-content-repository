import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableDataService } from './services/observable-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-content-repository';
  headerVisible=true;
  constructor(private router: Router, private observableDataService:ObservableDataService){
    this.observableDataService.headerVisible.subscribe(value =>{
      this.headerVisible = value;
    });
    this.router.navigate(['/splash']);
  }

  logoclick(){

  }
}
