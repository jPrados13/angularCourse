import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items = [
    {title: 'Why is the sky is blue?', content: 'Because it is'},
    {title: 'What is the sun?', content: 'The sun it is our star'},
    {title: 'What kind of cat do you like?', content: 'Only the goods ones'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
