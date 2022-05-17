import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';
import { QuizesComponent } from './quizes/quizes.component';
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

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'splash/home',
    component: HomeComponent
  },
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: 'quizes',
    component: QuizesComponent
  },
  {
    path: 'studentpadegogycompanion',
    component: StudentsPadegogyCompanionComponent
  },
  {
    path: 'teacherpadegogycompanion',
    component: TeacherPadegogyCompanionComponent
  },
  {
    path: 'foundation',
    component: FoundationComponent
  },
  {
    path: 'middle',
    component: MiddleComponent
  },
  {
    path: 'secondary',
    component: SecondaryComponent
  },
  {
    path: 'srsec',
    component: SrSecondaryComponent
  },
  {
    path: 'analysis',
    component: AnalysisComponent
  },
  {
    path: 'animatedvideos',
    component: AnimatedVideosComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'videosfromteacher',
    component: VideosFromTeacherComponent
  },
  {
    path: 'democlassvideos',
    component: DemoClassVideosComponent
  },
  {
    path: 'artgallerystudent',
    component: ArtGalleryStudentComponent
  },
  {
    path: 'mindmapping',
    component: MindMappingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
