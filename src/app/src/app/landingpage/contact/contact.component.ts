import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { DialogEmailSentComponent } from '../dialog-email-sent/dialog-email-sent.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(
    public dialog: MatDialog,
  ) { }
  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: '',
    setCheckbox: false,
  };



  mailTest = false;

  post = {
    endPoint: 'https://juridev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.openDialog();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  /**
   * The function calls up a dialogue after the email has been sent.
   */
  openDialog() {
    const dialogRef = this.dialog.open(DialogEmailSentComponent);

    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
}
