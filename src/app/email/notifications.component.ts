import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email-service/email.service';
import { Email } from '../email-class/email';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  email: Email;

  constructor(private route: ActivatedRoute, private router: Router, private emailservice: EmailService) { this.email = new Email(); }

  onSubmit() {
    this.emailservice.sendmail(this.email).subscribe(result => this.goToSendMail());
  }
  goToSendMail() {
    this.router.navigate(["/mail/save"]);
  }

  ngOnInit() {
  }

}
