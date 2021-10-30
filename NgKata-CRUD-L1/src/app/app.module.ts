import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonShellComponent } from './persons/person-shell/person-shell.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonEditComponent } from './persons/person-edit/person-edit.component';
import { PersonDataService } from './persons/person-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonShellComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(PersonDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
