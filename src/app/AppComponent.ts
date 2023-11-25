// app.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: './app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateToLista(): void {
    // Using the navigateByUrl method to navigate to "/lista"
    this.router.navigateByUrl('/lista');
  }
}