import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'write',
        loadChildren: () =>
            import('./pages/write/write.module').then((m) => m.WritePageModule),
    },
];
