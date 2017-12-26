import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { EthereumComponent } from './ethereum/ethereum.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { ModalContentComponent } from './ethereum/modal/modal.component'


@NgModule({
  declarations: [
    AppComponent,
    EthereumComponent,
    ResourcesComponent,
    HomeComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    ModalContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
