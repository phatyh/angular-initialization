import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  exports: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
