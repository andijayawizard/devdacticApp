import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PeoplePageModule } from '../pages/people/people.module';
import { PeopleDetailPageModule } from '../pages/people-detail/people-detail.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    PeoplePageModule,
    PeopleDetailPageModule,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
