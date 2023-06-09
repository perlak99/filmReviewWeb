import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmSearchComponent } from './films/film-search/film-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'src/generated/api.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { FilmListComponent } from './films/film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmSearchComponent,
    ButtonGroupComponent,
    CollapsibleComponent,
    FilmListComponent,
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: 'https://localhost:7130' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
