import { Route } from '@angular/router';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
    {
        path:'dashboard',
        component: PrivateLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: ()=> import('./pages/private/private.module').then(m=>m.PrivateModule)
            }
        ]
    },
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            // Default route for the public section
            {
                path: '',
                loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
            },
            // Route for unauthorized access
            {
                path: 'unauthorized',
                loadComponent: () => UnauthorizedComponent
            },
            // Route for page not found
            {
                path: 'page-not-found',
                loadComponent: () => PageNotFoundComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/page-not-found',
        pathMatch: 'full'
    }
];
