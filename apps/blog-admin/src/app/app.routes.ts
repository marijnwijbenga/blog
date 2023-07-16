import { Route } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'write',
                loadChildren: () =>
                    import('./pages/write/write.page.module').then(
                        (m) => m.WritePageModule
                    ),
            },
        ],
    },
];
