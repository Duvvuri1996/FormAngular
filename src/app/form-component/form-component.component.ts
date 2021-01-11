import { Component, OnInit } from '@angular/core';

import { FormServiceService } from '../form-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  public email: any;
  public subject: any;
  public content : any;

  constructor(
    public formService : FormServiceService,
    public router : Router,
    public toastr : ToastrManager
  ) { }

  ngOnInit(): void {
  }

  public signin: any =() => {
    if(!this.email){
      this.toastr.errorToastr('Please provide your email id')
    }
    else {
      let data = {
        email : this.email,
        subject : this.subject,
        content : this.content
      }
      this.formService.signinFunction(data).subscribe((apiResponse)=>{
        if(apiResponse.status === 200){
            this.router.navigate(['/success'])
        } else{
          this.toastr.warningToastr('User exists');
        }
      }, (err) => {
          this.toastr.errorToastr("Unknown error occurred")
        })
    }
  }

}
