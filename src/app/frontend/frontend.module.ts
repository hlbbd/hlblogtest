import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { ArticleComponent } from './article/article.component';
import { FrontendRoutingModule } from './frontend-routing.module';

@NgModule({
  imports: [
    FrontendRoutingModule,
    CommonModule
  ],
  declarations: [
    ArticleComponent,
    FrontendComponent
  ]
})
export class FrontendModule { }
