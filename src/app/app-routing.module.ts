import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { ResourcesComponent } from './resources/resources.component';



const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: 'app/about/about.module#AboutModule',
    data: { preload: true }
  },
  { path: 'ethereum101', component: EthereumComponent },
  { path: 'resources', component: ResourcesComponent },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
