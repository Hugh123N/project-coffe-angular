import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes_dashboard } from "./dashboard.routing";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../sharet/material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "./dashboard.component";

export const dashboardModule_config:ApplicationConfig= {
    providers: [
        provideRouter(routes_dashboard),
        CommonModule,
        MaterialModule(),
        FlexLayoutModule,
        DashboardComponent
    ]
};