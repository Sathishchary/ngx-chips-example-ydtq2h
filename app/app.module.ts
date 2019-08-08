import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TagInputComponent } from './shared/tag-input/tag-input.component';

@NgModule({
  imports: [
    BrowserModule,
    TagInputModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AppComponent, HelloComponent, TagInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
