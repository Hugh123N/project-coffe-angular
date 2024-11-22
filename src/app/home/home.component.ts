import { Component, OnInit } from '@angular/core';
import { MejorVendidoComponent } from '../mejor-vendido/mejor-vendido.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MejorVendidoComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit{
    constructor(private dialog:MatDialog ){}

    ngOnInit():void{
    }

    //genera un dialog  mostrando dntro el componente SignupComponent
    handlerSignupAction(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='550px';
      this.dialog.open(SignupComponent, dialogConfig)
    }
    //genera un dialog  mostrando dntro el componente ForgotPasswordComponent
    handlerForgotPasswordAction(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='550px';
      this.dialog.open(ForgotPasswordComponent, dialogConfig)
    }

}
