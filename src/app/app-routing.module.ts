import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",canActivate:[authGuard], component:HomeComponent},
  {path:"about", component:AboutComponent, canActivate:[authGuard]},
  {path:"contacts", component:ContactsComponent,canActivate:[authGuard]},
  {path:"contacts/:id", canActivate:[authGuard]},
  {path:"signin", component:SigninComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}
 /*  {path:"", redirectTo:"about", pathMatch:"full"} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }