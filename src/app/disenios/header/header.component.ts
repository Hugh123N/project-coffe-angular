import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls:[]
})
export class HeaderComponent {
  constructor() {
  }
}
