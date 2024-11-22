import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../service/snackbar.service';
import { GlobalConstans } from '../sharet/global-constans';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,  
    MatInputModule,
    MatToolbarModule, 
    MatDialogContent, 
    MatFormField, 
    MatLabel,
    MatIconModule,
    MatError,
    FormsModule, 
    ReactiveFormsModule,//
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatSidenavModule,
    CdkAccordionModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{

  forgotPasswordForm:any= FormGroup;
  responseMessage:any;

  constructor(
    private formBuilder: FormBuilder,// Para construir y manejar formularios reactivos.
    private userService: UserService,
    private dialogRef:MatDialogRef<ForgotPasswordComponent>, // Referencia para cerrar o interactuar con el diálogo actual.
    private ngxService:NgxUiLoaderService, // Servicio para mostrar cargadores animados en la interfaz
    private snackBarService:SnackbarService // Servicio para mostrar notificaciones emergentes (snackbars) al usuario.
  ){}

  ngOnInit(): void{
    this.forgotPasswordForm = this.formBuilder.group({
      email:[null,[Validators.required, Validators.pattern(GlobalConstans.emailRegex)]]
    })
  }

  handleSubmit(){
    this.ngxService.start();//muestra indicador de carga
    var formData= this.forgotPasswordForm.value; //obtiene datos del formulario
    var data = {
      email:formData.email
    }
    this.userService.forgotPassword(data).subscribe((response:any)=>{ //consulta backend
      this.ngxService.stop(); // si es exitoso detiene el cargador
      this.responseMessage=response?.message; //almacena mensaje de exito
      this.dialogRef.close(); 
      this.snackBarService.openSnackBar(this.responseMessage,'')//muestra notificacion con el mesaje de backend recivido
    },(error)=>{ // si falla
      this.ngxService.stop(); ///detiene cargador
      if(error.error?.message){ // si existe mensaje de error de backend
        this.responseMessage = error?.error.message; //alamacena
      }else{ //si no existe
        this.responseMessage = GlobalConstans.genericError //mensaje error front
      }
      this.snackBarService.openSnackBar(this.responseMessage, GlobalConstans.error);//y muestra mensaje de error en snackBar
    })

  }

}
