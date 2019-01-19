import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
{path:'signin', component:SignInComponent},
{path:'signup', component:SignUpComponent},
{path:'work', component:WorkComponent},
{path:'', redirectTo:'/signin', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
