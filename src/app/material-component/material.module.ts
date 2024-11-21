import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter, RouterModule } from "@angular/router";
import { MaterialRoutes } from "./material.routing";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from "@angular/common";
import { ViewBillProductComponent } from "./dialog/view-bill-product/view-bill-product.component";
import { MaterialModule } from "../sharet/material-module";

export const MaterialModule_config ={

    providers:[
     importProvidersFrom(
        CommonModule,
        RouterModule.forChild(MaterialRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule
     ),
     MaterialModule(),
    ],
    declarations:[
        ViewBillProductComponent
    ]
}