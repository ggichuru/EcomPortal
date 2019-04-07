import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';

@NgModule({
  declarations: [
    MainNavComponent,
    LoginComponent
  ],
  imports: [
    MaterialSharedModule,
    CommonRoutingModule
  ],
  exports: [
    MainNavComponent,
    LoginComponent
  ]
})
export class CustomCommonModule { }