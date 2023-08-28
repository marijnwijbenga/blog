import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WritePageComponent } from './write.page.component';
import { PlushUiModule } from '@portfolio-nx-workspace/plush-ui';
import { LayoutModule } from '../../layout/layout.module';
import { ComponentsModule } from '../../components/components.module';

const ROUTES: Routes = [{ path: '', component: WritePageComponent }];
@NgModule({
    declarations: [WritePageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        PlushUiModule,
        LayoutModule,
        ComponentsModule,
    ],
})
export class WritePageModule {}
