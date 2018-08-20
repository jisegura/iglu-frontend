import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HttpSnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  public openSnackBar(message: string, action: string): void{
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
