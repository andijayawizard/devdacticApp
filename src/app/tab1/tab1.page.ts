import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  myVar: string = 'jangan di klik dong!';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  updateValue() {
    this.myVar = `dibilang jangan di klik!`;
  }
  openDetails() {
    this.router.navigateByUrl('/people/100');
  }
}
