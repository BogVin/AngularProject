import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BooksFormComponent } from './books-form/books-form.component';
import {BooksFilterPipe} from './shared/books-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksFormComponent,
    BooksFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
