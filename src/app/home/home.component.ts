import { Component, OnInit } from '@angular/core';
import { MejorVendidoComponent } from '../mejor-vendido/mejor-vendido.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MejorVendidoComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
    constructor(){}

    ngOnInit():void{

    }
}
