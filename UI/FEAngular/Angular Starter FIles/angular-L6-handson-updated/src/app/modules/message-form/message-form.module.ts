import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from './components/message-form/message-form.component';



@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MessageFormComponent],
  exports: [MessageFormComponent]
})
export class MessageFormModule { }
