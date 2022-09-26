import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMusicComponent } from './display-music/display-music.component';



@NgModule({
  declarations: [
    DisplayMusicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DisplayMusicComponent]
})
export class MusicModule { }
