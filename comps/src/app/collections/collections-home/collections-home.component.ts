import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'Juan', age: 25, job: 'Designer' },
    { name: 'Gema', age: 27, job: 'Developer' },
    { name: 'Pepe', age: 35, job: 'Project Manager' }
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
