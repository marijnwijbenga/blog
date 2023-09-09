import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WritePageComponent } from './write.page.component';
import { LayoutModule } from '../../layout/layout.module';
import { ComponentsModule } from '../../components/components.module';
import {
    ColumnComponent,
    GridComponent,
    RowComponent,
} from '@portfolio-nx-workspace/plush-ui';

const ROUTES: Routes = [{ path: '', component: WritePageComponent }];

@NgModule({
    declarations: [WritePageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ComponentsModule,
        GridComponent,
        RowComponent,
        ColumnComponent,
    ],
})
export class WritePageModule {}
