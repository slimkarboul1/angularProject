import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;

  
  @Output() childEvent = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value : string){
    this.childEvent.emit(value)

  }

}
