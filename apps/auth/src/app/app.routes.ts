import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'auth',
        loadChildren: ()=> import('./pages/auth/auth.module').then(m=>m.AuthModule)
    }
];
