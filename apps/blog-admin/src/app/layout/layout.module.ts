import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { PlushUiModule } from '@portfolio-nx-workspace/plush-ui';

@NgModule({
    declarations: [DashboardLayoutComponent],
    imports: [CommonModule, RouterModule, PlushUiModule],
    exports: [DashboardLayoutComponent],
})
export class LayoutModule {}
