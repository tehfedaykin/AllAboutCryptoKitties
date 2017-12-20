import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';


import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { KittyComponent } from './kitty/kitty.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { PurchasingComponent } from './purchasing/purchasing.component';


@NgModule({
  declarations: [
    AboutComponent,
    KittyComponent,
    RequirementsComponent,
    PurchasingComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
