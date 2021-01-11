import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormServiceService } from '../app/form-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { SuccessComponentComponent } from './success-component/success-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    SuccessComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path:'signin', component : FormComponentComponent },
      { path:'success', component: SuccessComponentComponent }
  ])
],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
