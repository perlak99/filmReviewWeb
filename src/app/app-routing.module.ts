import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponent } from './film-search/film-search.component';

const routes: Routes = [
  {path: '', redirectTo: 'film/search', pathMatch: 'full'},
  {path: 'film/search', component: FilmSearchComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
