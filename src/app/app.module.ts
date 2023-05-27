import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmSearchComponent } from './film-search/film-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'src/generated/api.module';

@NgModule({
  declarations: [
    AppComponent,
    FilmSearchComponent
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: 'https://localhost:7130' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
