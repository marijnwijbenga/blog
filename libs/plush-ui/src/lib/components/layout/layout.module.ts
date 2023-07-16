import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { LayoutComponent } from './layout/layout.component';
import { PanelComponent } from './panel/panel.component';
import { PanelItemComponent } from './panel-item/panel-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
    declarations: [
        PageComponent,
        LayoutComponent,
        PanelComponent,
        PanelItemComponent,
        HeaderComponent,
        FooterComponent,
        BarComponent,
    ],
    exports: [
        PageComponent,
        LayoutComponent,
        PanelComponent,
        PanelItemComponent,
        HeaderComponent,
        FooterComponent,
        BarComponent,
    ],
    imports: [CommonModule],
})
export class PlushLayoutModule {}
