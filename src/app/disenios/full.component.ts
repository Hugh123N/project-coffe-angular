import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatSidenav, MatSidenavContainer,MatSidenavContent } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [RouterModule, MatIcon,MatToolbar, MatSidenavContent, HeaderComponent,MatSidenav, MatSidenavContainer, SidebarComponent],
  templateUrl: './full.component.html',
  //styleUrl: './full.component.scss'
})
export class FullComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() { }
}
