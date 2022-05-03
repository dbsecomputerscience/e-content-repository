import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';
import { QuizesComponent } from './quizes/quizes.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
