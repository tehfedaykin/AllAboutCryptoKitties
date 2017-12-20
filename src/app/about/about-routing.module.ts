import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { KittyComponent } from './kitty/kitty.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { PurchasingComponent } from './purchasing/purchasing.component';



const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '',  component: KittyComponent },
      { path: 'kitties', component: KittyComponent },
      { path: 'requirements', component: RequirementsComponent },
      { path: 'purchasing', component: PurchasingComponent }
     ]
   }

];

export const aboutRoutes = RouterModule.forChild(routes);


@NgModule({
  imports: [aboutRoutes],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {

}
