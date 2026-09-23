import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {Article} from '../../../domain/model/article.entity';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {SourceSummary} from '../source-summary/source-summary';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {DatePipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-article-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    DatePipe,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
    TranslatePipe,
    MatIconButton,
    MatIcon,
    MatCardAvatar
  ],
  templateUrl: './article-item.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './article-item.css'
})
/**
 * Presentation component responsible for rendering and sharing one article.
 */
export class ArticleItem {
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  /** Input article view model from the application state. */
  article = input.required<Article>();

  /**
   * Shares the current article through the Web Share API or clipboard fallback.
   */
  async shareArticle() {
    const articleShareInfo = {
      title: this.article()?.title,
      url: this.article()?.urlAsString
    };

    if (navigator.share) {
      try {
        await navigator.share(articleShareInfo);
        this.snackBar.open('Article shared successfully!', 'Close', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Sharing failed.', 'Close', { duration: 3000 });
      }
    } else {
      try {
        if (articleShareInfo.url) {
          await navigator.clipboard.writeText(articleShareInfo.url);
          this.snackBar.open('Article URL copied to clipboard!', 'Close', { duration: 3000 });
        }
      } catch (error) {
        this.snackBar.open('Failed to copy URL.', 'Close', { duration: 3000 });
      }
    }
  }

  async showSourceSummary() {
    this.dialog.open(SourceSummary, {
      data: this.article().source
    });
  }


}
