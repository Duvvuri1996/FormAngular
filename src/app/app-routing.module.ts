import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [];

@NgModule({
  imports: [ReactiveFormsModule,
  FormsModule,
  BrowserAnimationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
