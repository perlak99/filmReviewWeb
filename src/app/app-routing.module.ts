import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponent } from './films/film-search/film-search.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';

const routes: Routes = [
  {path: '', redirectTo: 'films/search', pathMatch: 'full'},
  {path: 'films/search', component: FilmSearchComponent},
  {path: 'user/login-register', component: LoginRegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
