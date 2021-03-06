import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/app.module').then(m => m.AppModule), // Lazy load app module
        data: { preload: true }
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // Lazy load app module
        data: { preload: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
