import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const route: Routes = [
    {path: 'form', loadChildren: () => import('./modules/form/form.module').then(f => f.FormModule)},
    {path: 'users', loadChildren: () => import('./modules/user/user.module').then(u => u.UserModule)},
    {path: 'users/posts', loadChildren: () => import('./modules/post/post.module').then(p => p.PostModule)},
    {path: 'users/posts/:id/comments/:post_id', loadChildren: () => import('./modules/comment/commet.module').then(c => c.CommetModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
