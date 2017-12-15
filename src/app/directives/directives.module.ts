import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistsComponent } from './userlists/userlists.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserlistsComponent],
  exports: [
    UserlistsComponent
  ]
})
export class DirectivesModule { }
