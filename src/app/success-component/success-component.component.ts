import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-success-component',
  templateUrl: './success-component.component.html',
  styleUrls: ['./success-component.component.css']
})
export class SuccessComponentComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit(): void {
  }
  public goBack: any = () => {
    this.location.back()
  }
}
