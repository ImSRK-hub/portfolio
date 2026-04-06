import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuCollapsed = true;
  projectDropdownOpen = false;
  screenWidth = window.innerWidth;
  headerNavTitle = 'Sharukhan Athil N';


  onNavToggle(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  toggleProjectsDropDown(){
    this.projectDropdownOpen = !this.projectDropdownOpen;
  }
}
