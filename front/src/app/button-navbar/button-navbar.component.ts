import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-navbar',
  templateUrl: './button-navbar.component.html',
  styleUrls: ['./button-navbar.component.css']
})
export class ButtonNavbarComponent implements OnInit {

  @Input()
  public buttonName: string;

  constructor() { }

  ngOnInit() {
  }

}