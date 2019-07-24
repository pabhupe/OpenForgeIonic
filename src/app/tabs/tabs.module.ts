import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'profile/:username', loadChildren: '../profile/profile.module#ProfilePageModule' },
  ],
  },
  {
    path:'',
    redirectTo:'../home/home.module#HomePageModule',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
