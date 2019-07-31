import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'

import { AppComponent } from './app.component';
import { PenListComponent } from './components/pen-list/pen-list.component';
import { PenComponent } from './components/pen/pen.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    PenListComponent,
    PenComponent,
    SidebarComponent,
    ButtonGroupComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
