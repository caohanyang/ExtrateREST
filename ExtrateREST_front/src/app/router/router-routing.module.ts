import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditorComponent} from '../editor/editor.component'
import {StepComponent } from '../step/step.component';
import {HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'setup',
    component: StepComponent,
  },
  {
    path: 'openapi',
    component: EditorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
