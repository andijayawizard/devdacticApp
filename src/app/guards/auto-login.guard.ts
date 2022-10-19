import { filter, take, map } from 'rxjs/operators';
import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canLoad(): // route: Route,
  // segments: UrlSegment[]

  Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null),
      take(1),
      map((isAuthenticated) => {
        console.log('Found previous token, automatic login!');
        if (isAuthenticated) {
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        } else {
          return true;
        }
      })
    );
  }
}
