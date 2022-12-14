import { ProductPageModule } from './../pages/product/product.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
          },
        ],
      },
      {
        path: 'tab2/people/:id',
        loadChildren: () =>
          import('../pages/people-detail/people-detail.module').then(
            (m) => m.PeopleDetailPageModule
          ),
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
          },
          {
            path: 'tab3/product',
            loadChildren: () =>
              import('../pages/product/product.module').then(
                (m) => m.ProductPageModule
              ),
          },
        ],
      },
      {
        path: 'tab3/product/:id',
        loadChildren: () =>
          import('../pages/product-detail/product-detail.module').then(
            (m) => m.ProductDetailPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
