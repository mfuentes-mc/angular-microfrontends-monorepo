import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'sales',
        loadChildren: ()=> import('./pages/sales/sales.module').then(m=>m.SalesModule)
    }
];
