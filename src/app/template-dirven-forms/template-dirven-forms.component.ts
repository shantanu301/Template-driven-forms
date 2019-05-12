import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-dirven-forms',
  templateUrl: './template-dirven-forms.component.html',
  styleUrls: ['./template-dirven-forms.component.css']
})
export class TemplateDirvenFormsComponent implements OnInit {

  course = [
    {id:1,courseName:'Development'},
    {id:2,courseName:'Design'},
    {id:3,courseName:'Communication'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
