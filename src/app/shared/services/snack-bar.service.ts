import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private config = new MatSnackBarConfig();

  constructor(public snackBar: MatSnackBar) {
    this.config.verticalPosition = 'top';
    this.config.horizontalPosition = 'right';
    this.config.duration = 3000;
  }

  showSuccessMessage(message: string) {
    this.config.panelClass = 'show-success-message';
    this.snackBar.open(message, 'X', this.config);
  }
}
