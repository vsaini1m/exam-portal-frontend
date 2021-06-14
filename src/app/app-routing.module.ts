import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorysComponent } from './pages/admin/add-categorys/add-categorys.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizzesComponent } from './pages/admin/add-quizzes/add-quizzes.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategorysComponent } from './pages/admin/view-categorys/view-categorys.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingupComponent } from './pages/singup/singup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  }, 
  
  {
    path:'singup',
    component:SingupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard]
    //four load component inside component
    //inside admin component loading profile and other compnent

    ,children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'categories',
        component:ViewCategorysComponent
      },
      {
        path:'add-categories',
        component:AddCategorysComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quizzes',
        component:AddQuizzesComponent
      }
      ,
      {
        path:'update-quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'question/:qid/:qtitle',
        component:ViewQuestionComponent
      },
      {
        path:'add-question/:qid/:qtitle',
        component:AddQuestionComponent
      }
    ]
  
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
