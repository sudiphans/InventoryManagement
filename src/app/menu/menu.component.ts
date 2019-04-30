import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  appTitle="Inventory Management System";

  constructor(private keycloakservice : KeycloakService) { }

  ngOnInit() {
  }

  logout(){
    this.keycloakservice.logout();
  }

}
