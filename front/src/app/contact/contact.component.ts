import { Component, OnInit } from '@angular/core';
import { SendEmailService } from 'src/app/send-email-service';
import { Testimony } from 'src/app/testimony';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public buttonSend: string = "Submit";

  public name: string = null;
  public email: string = null;
  public comments: string = null;
  public submitted: boolean = false;

  @Output() public getDisplay: EventEmitter<any> = new EventEmitter()

  constructor(private emailService: SendEmailService) { }

  ngOnInit() {
    this.displayComponent = false;
  }

  onGetDisplay(event:boolean):void {
    this.displayComponent = !event;
    this.getDisplay.emit(this.displayComponent);
  }

  sendTestimony(event: boolean, testimonyFormIsValid: boolean): void {

    if (event && testimonyFormIsValid) {
      let testimony = new Testimony(
        this.name, this.email, this.comments,
      );
      this.emailService.sendTestimonyEmail(
        testimony
        ).subscribe(
          (response) => {
            if (response) {
              alert("Your message has been sent by email for validation");
            } else {
              alert("An error has occurred, your message has not been sent");
            }
          },
          error => {
            alert("An error has occurred, your message has not been sent");
          }
        );

    } else if (event && (!testimonyFormIsValid)) {
      this.submitted = true;
    }
  }

}
