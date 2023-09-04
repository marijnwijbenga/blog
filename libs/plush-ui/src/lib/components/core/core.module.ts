import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button';
import { IconComponent } from './icon/icon.component';

@NgModule({
    declarations: [ButtonComponent, IconComponent],
    exports: [ButtonComponent, IconComponent],
    imports: [CommonModule],
})
export class PlushCoreModule {}
