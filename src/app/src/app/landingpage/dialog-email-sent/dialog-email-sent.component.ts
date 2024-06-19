import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-email-sent',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogModule,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    TranslateModule
  ],
  templateUrl: './dialog-email-sent.component.html',
  styleUrl: './dialog-email-sent.component.scss'
})
export class DialogEmailSentComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEmailSentComponent>,
  ) {

  }

  /**
   * Close the Dialog
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
