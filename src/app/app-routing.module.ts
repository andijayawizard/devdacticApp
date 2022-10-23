import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./pages/intro/intro.module').then((m) => m.IntroPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard],
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./pages/people/people.module').then((m) => m.PeoplePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'people/:id',
    loadChildren: () =>
      import('./pages/people-detail/people-detail.module').then(
        (m) => m.PeopleDetailPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(
        (m) => m.ProductDetailPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./pages/service/service.module').then((m) => m.ServicePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'service/:id',
    loadChildren: () =>
      import('./pages/service-detail/service-detail.module').then(
        (m) => m.ServiceDetailPageModule
      ),
    canLoad: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
