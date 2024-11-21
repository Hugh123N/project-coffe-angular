import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  //muestra notificacion de error visible durante 2 seconds y caso contrario igual 
  openSnackBar(message:string, action:string){
    if(action === 'error'){
      this.snackBar.open(message, '', {
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000,
        panelClass:['black-snackbar']
      });
    }else{
      this.snackBar.open(message, '', {
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000,
        panelClass:['green-snackbar']
      }); 
    }
  }
}
