import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  public buttonName1: any = 'Add a ticket';
  public buttonName2: any = 'Delete a ticket';

  constructor() { }

  ngOnInit() {
    

    }
    addPeriod() {
    let ticket = document.getElementById("ticket");
    let clone = ticket.firstElementChild.cloneNode(true);
    ticket.appendChild(clone);
  }

  DeletePeriod() {
    let ticket = document.getElementById("ticket");
    let clone = ticket.firstElementChild.cloneNode(true);
    ticket.appendChild(clone);
  }
}