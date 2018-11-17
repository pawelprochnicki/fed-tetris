import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroFormComponent } from './intro-form/intro-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IntroFormComponent],
  exports: [
    IntroFormComponent,
  ]
})
export class IntroModule { }
