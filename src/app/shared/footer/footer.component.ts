import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  mobileNo: number = 8124435448;
  email: string = 'sharukhanathiln@gmail.com';
  recipient = this.email;
  subject = 'Subject';
  body = 'Please Enter your Interest here';

  openGmail() {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.recipient}&su=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    window.open(gmailUrl, '_blank');
  }
}
