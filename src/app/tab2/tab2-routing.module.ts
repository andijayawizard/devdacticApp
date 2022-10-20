import { PeopleDetailPage } from './../pages/people-detail/people-detail.page';
import { PeoplePage } from './../pages/people/people.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: PeoplePage,
    // children: [
    //   { path: '/people', component: PeoplePage },
    //   { path: '/people/:id', component: PeopleDetailPage },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
