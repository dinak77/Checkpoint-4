import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public home: string = "Home";
  public price: string = "Price";
  public galleryPage: string = "Gallery";
  public contactPage: string = "Contact";

  constructor() { }

  ngOnInit() {
  }

}
