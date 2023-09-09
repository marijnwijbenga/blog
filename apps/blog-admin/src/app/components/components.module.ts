import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCheatsheetComponent } from './md-cheatsheet/md-cheatsheet.component';
import { CardComponent, IconComponent } from '@portfolio-nx-workspace/plush-ui';

@NgModule({
    declarations: [MdCheatsheetComponent],
    imports: [CommonModule, CardComponent, IconComponent],
    exports: [MdCheatsheetComponent],
})
export class ComponentsModule {}
