import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

//pages
import { SignComponent } from './pages/sign/sign.component';

@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
