import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  show:boolean;
  constructor(private router: Router) { 
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.show = false;
      }
    });
  }

  ngOnInit() {
  }

}
