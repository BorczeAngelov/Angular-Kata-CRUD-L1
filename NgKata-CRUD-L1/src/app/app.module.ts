import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { PersonShellComponent } from './persons/person-shell/person-shell.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonEditComponent } from './persons/person-edit/person-edit.component';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonShellComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
