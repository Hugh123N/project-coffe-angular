import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './disenios/full.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    {
        path: 'cafe',
        component:FullComponent,
        children:[
           {path:'',
            redirectTo:'/cafe/dashboard', 
            pathMatch:'full'
            },
            
        ]
    },
    {path:'**', component:HomeComponent}

    
];
