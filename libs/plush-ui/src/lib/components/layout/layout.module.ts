import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { LayoutComponent } from './layout/layout.component';
import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
    declarations: [
        PageComponent,
        LayoutComponent,
        ColumnComponent,
        RowComponent,
        HeaderComponent,
        FooterComponent,
        BarComponent,
    ],
    exports: [
        PageComponent,
        LayoutComponent,
        ColumnComponent,
        RowComponent,
        HeaderComponent,
        FooterComponent,
        BarComponent,
    ],
    imports: [CommonModule],
})
export class PlushLayoutModule {}
