import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { QuizesComponent } from './quizes/quizes.component';
import { HttpClientModule } from  '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StudentsPadegogyCompanionComponent } from './students-padegogy-companion/students-padegogy-companion.component';
import { TeacherPadegogyCompanionComponent } from './teacher-padegogy-companion/teacher-padegogy-companion.component';
import { FoundationComponent } from './foundation/foundation.component';
import { MiddleComponent } from './middle/middle.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { SrSecondaryComponent } from './sr-secondary/sr-secondary.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AnimatedVideosComponent } from './animated-videos/animated-videos.component';
import { VideosFromTeacherComponent } from './videos-from-teacher/videos-from-teacher.component';
import { DemoClassVideosComponent } from './demo-class-videos/demo-class-videos.component';
import { ArtGalleryStudentComponent } from './art-gallery-student/art-gallery-student.component';
import { MindMappingComponent } from './mind-mapping/mind-mapping.component';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent,
    QuizesComponent,
    StudentsPadegogyCompanionComponent,
    TeacherPadegogyCompanionComponent,
    FoundationComponent,
    MiddleComponent,
    SecondaryComponent,
    SrSecondaryComponent,
    AnalysisComponent,
    AnimatedVideosComponent,
    VideosFromTeacherComponent,
    DemoClassVideosComponent,
    ArtGalleryStudentComponent,
    MindMappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    NgbModule,
    MatIconModule,
    MatTreeModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
