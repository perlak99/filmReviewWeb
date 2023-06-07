import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponent } from './film-search/film-search.component';

const routes: Routes = [
  {path: '', redirectTo: 'films/search', pathMatch: 'full'},
  {path: 'films/search', component: FilmSearchComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
