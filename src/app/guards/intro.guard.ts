import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';

export const INTRO_KEY = 'intro-seen';
@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanLoad {
  constructor(private router: Router) {}
  async canLoad(): // | Observable<boolean | UrlTree>
  Promise<boolean> {
    // | UrlTree // | boolean
    const hasSeenIntro = await Storage.get({ key: INTRO_KEY });
    if (hasSeenIntro && hasSeenIntro.value === 'true') {
      return true;
    } else {
      this.router.navigateByUrl('/intro', { replaceUrl: true });
    }
  }
}
