import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPipe } from 'src/app/pipe/logo.pipe';
import { ConferenceColorPipe } from './conference-color.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ConferenceColorPipe,
    LogoPipe
  ],
  declarations: [
    LogoPipe,
    ConferenceColorPipe
  ]
})
export class PipeModule { }