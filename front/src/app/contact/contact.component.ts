import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Member } from '../member';
import { SendmailService } from '../sendmail.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  public ourmember: Member;
  private littleclient: HttpClient;

  // here i initialise the variable as the member class

  public lastName: string = null;
  public firstName: string = null;
  public phoneNumber: string = null;
  public email: string = null;
  public comment: string = null;

  constructor(private emailService: SendmailService) {
    this.ourmember = new Member();
  }

  submit() {
    this.ourmember.lastName = this.lastName;
    this.ourmember.firstName = this.firstName;
    this.ourmember.phoneNumber = this.phoneNumber;
    this.ourmember.email = this.email;
    this.ourmember.comment = this.comment;

    this.emailService.sendmail(this.ourmember).subscribe(
      () => {
        alert("mail envoyé");
      }
     
    );
    console.log(this.ourmember)
  }

  // public submit(): void {
  //   this.littleclient.post(
  //     "",
  //     this.ourmember,
  //     {
  //       headers: {
  //         "content-type": "application/x-www-form-urlencoded"
  //       }
  //     }
  //   ).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  ngOnInit() {
  }

  onSubmit() {

  }
}
