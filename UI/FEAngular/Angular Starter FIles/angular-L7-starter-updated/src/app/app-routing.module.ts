import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';
import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';


const routes: Routes = [
  {
    path: 'message',
    component: MessageFormComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
