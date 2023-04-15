import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-restricted-space',
  templateUrl: './restricted-space.component.html',
  styleUrls: ['./restricted-space.component.css']
})
export class RestrictedSpaceComponent implements OnInit{

  projectmanager: boolean
  financemanager: boolean
  isAdmin = false
  constructor(private keycloakService: KeycloakService){
    this.projectmanager = keycloakService.getUserRoles().includes('pm');
    this.financemanager = keycloakService.getUserRoles().includes('fm');
    this.isAdmin = keycloakService.getUserRoles().includes('admin');
  }

  ngOnInit(): void {
      
  }
  public username() : string{
    return this.keycloakService.getUsername();
  }

  public logout(){
    this.keycloakService.logout('http://localhost:4200');
  }
}
