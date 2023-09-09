import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import {
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    PageComponent,
} from '@portfolio-nx-workspace/plush-ui';

@NgModule({
    declarations: [DashboardLayoutComponent],
    imports: [
        CommonModule,
        RouterModule,
        PageComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    exports: [DashboardLayoutComponent],
})
export class LayoutModule {}
