import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  stats = [
    {value: 22, label:"# of users"},
    {value: 750, label:"Revenue"},
    {value: 13, label:"Comments"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
