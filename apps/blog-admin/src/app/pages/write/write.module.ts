import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WriteComponent } from './write.component';

const ROUTES: Routes = [{ path: '', component: WriteComponent }];
@NgModule({
    declarations: [WriteComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class WritePageModule {}
