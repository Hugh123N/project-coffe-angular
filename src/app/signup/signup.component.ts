import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { SnackbarService } from '../service/snackbar.service';
import { MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstans } from '../sharet/global-constans';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-signup',
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
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  password=true;
  confirmPassword=true; 
  signupForm:any=FormGroup;
  responseMessage:any;

  constructor(
    private formBuilder: FormBuilder, 
    private router:Router, 
    private userService:UserService,
    private snackbarService:SnackbarService,
    public dialogRef:MatDialogRef<SignupComponent>,
    private ngxService:NgxUiLoaderService) { }

    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        name:[null,[Validators.required, Validators.pattern(GlobalConstans.nameRegex)]],
        email:[null,[Validators.required, Validators.pattern(GlobalConstans.emailRegex)]],
        numberContact:[null,[Validators.required, Validators.pattern(GlobalConstans.phoneRegex)]],
        password:[null, [Validators.required]],
        confirmPassword:[null,[Validators.required]]})
    }

    // Valida si los campos de "password" y "confirmPassword" coinciden
    validateSubmit(){
      // Si las contraseñas no coinciden, devuelve "true" (no permite enviar el formulario)
      if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value){
        return true;
      }  else{
        // Si coinciden, devuelve "false" (permite enviar el formulario)
        return false;
      }
    }
    
    // Maneja la acción de enviar el formulario de registro
    handleSubmit(){
       // Inicia el loader para indicar que se está procesando la solicitud
      this.ngxService.start();
      // Obtiene los valores del formulario
      var formData=this.signupForm.value;
      var data = { // Prepara datos para enviarlos al backend
        name: formData.name,
        email: formData.email,
        numberContact: formData.numberContact,
        password: formData.password
      }
      // Llama al servicio "signup" para registrar al usuario
      this.userService.signup(data).subscribe((response:any)=>{
        this.ngxService.stop();
        this.dialogRef.close();
        this.responseMessage = response?.message;
        this.snackbarService.openSnackBar(this.responseMessage,"");
        this.router.navigate(['/']);
      },(error)=>{ // Detiene el loader en caso de error
        this.ngxService.stop();
        // Define un mensaje de error basado en la respuesta del backend
        if(error.error?.message){
          this.responseMessage=error.error?.message;
        }else{
          this.responseMessage=GlobalConstans.genericError;
        }
        // Muestra el mensaje de error en el snackbar
        this.snackbarService.openSnackBar(this.responseMessage, GlobalConstans.error)
      }) 
    }

}
