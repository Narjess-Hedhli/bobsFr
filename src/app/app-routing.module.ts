import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {SuccessPageComponent} from "./success-page/success-page.component";

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'success', component: SuccessPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
