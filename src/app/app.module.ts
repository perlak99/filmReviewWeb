import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmSearchComponent } from './films/film-search/film-search.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'src/generated/api.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ToastComponent } from './toast/toast.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    FilmSearchComponent,
    ButtonGroupComponent,
    CollapsibleComponent,
    FilmListComponent,
    LoginRegisterComponent,
    ToastComponent,
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: 'https://localhost:7130' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['https://localhost:7130']
      }
    })
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
