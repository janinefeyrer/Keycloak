import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSpaceComponent } from './public-space/public-space.component';
import { RestrictedSpaceComponent } from './restricted-space/restricted-space.component';
import { KeycloakGuard } from './keycloak.guard';

const routes: Routes = [
  {path: 'public', component: PublicSpaceComponent},
  {path: 'restricted', component: RestrictedSpaceComponent, canActivate: [KeycloakGuard]},
  {path: '**', component: PublicSpaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
