import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes_dashboard } from "./dashboard.routing";

export const dashboardModule_config:ApplicationConfig= {
    providers: [
        provideRouter(routes_dashboard),
    ]
};