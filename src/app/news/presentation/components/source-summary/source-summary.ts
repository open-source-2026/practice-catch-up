import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {Source} from '../../../domain/model/source.entity';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    TranslatePipe,
    MatIcon
  ],
  selector: 'app-source-summary',
  styleUrl: './source-summary.css',
  templateUrl: './source-summary.html',
})
export class SourceSummary {
  /** Source data injected by the dialog service. */
  source: Source = inject(MAT_DIALOG_DATA);
}
