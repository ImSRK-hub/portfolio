import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor(private router: Router){}

  routeTo(tab :string){
    switch (tab) {
      case 'resume': 
      this.router.navigateByUrl("/resume");
      break;
    };
  }
}
