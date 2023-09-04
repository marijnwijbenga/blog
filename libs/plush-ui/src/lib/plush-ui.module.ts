import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlushCommonModule } from './components/common/common-ui.module';
import { PlushCoreModule } from './components/core/core.module';
import { PlushLayoutModule } from './components/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [],
    exports: [PlushCommonModule, PlushCoreModule, PlushLayoutModule],
})
export class PlushUiModule {}
