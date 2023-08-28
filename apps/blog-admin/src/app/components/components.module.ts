import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCheatsheetComponent } from './md-cheatsheet/md-cheatsheet.component';
import { PlushUiModule } from '@portfolio-nx-workspace/plush-ui';

@NgModule({
    declarations: [MdCheatsheetComponent],
    imports: [CommonModule, PlushUiModule],
    exports: [MdCheatsheetComponent],
})
export class ComponentsModule {}
