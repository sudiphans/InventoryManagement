import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule,MatButtonModule,MatCheckboxModule,MatIconModule,MatCardModule,MatToolbarModule,MatListModule,MatSidenavModule} from '@angular/material';
import {MatTableModule,MatPaginatorModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import {ClarityModule} from '@clr/angular';
import {KeycloakService,KeycloakAngularModule} from 'keycloak-angular';
import {initializer} from './app-init';

import {AppAuthGuard} from './app.authguard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ClarityModule,
    KeycloakAngularModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
