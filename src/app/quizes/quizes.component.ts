import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ObservableDataService } from '../services/observable-data.service';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {
  adminHTML:any;
  constructor(private http: HttpClient, public sanitizer: DomSanitizer, private observableDataService:ObservableDataService) {
    this.observableDataService.headerVisible.next(true);
  }

  ngOnInit(): void {
  }

  goToQuizAdmin(){
    window.open('https://dbsequizadmin.web.app', "_blank");
  }

  goToQuizes(){
    window.open('https://dbsequiz.firebaseapp.com/home', "_blank");
  }

}
