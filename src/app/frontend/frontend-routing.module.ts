import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
    {
        path: '', component: FrontendComponent,
        children: [
            // { path: '', loadChildren: './article/article.module#ArticleModule' }
            { path: '', component: ArticleComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }
