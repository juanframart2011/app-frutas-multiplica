import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPipe } from 'src/app/pipe/logo.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LogoPipe
  ],
  declarations: [
    LogoPipe
  ]
})
export class PipeModule { }