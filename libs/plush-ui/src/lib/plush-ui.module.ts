import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlushCommonModule } from './components/common/common-ui.module';
import { PlushCoreModule } from './components/core/core.module';
import { PlushLayoutModule } from './components/layout/layout.module';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [PlushCommonModule, PlushCoreModule, PlushLayoutModule],
})
export class PlushUiModule {}
