import { Component, Input } from '@angular/core';
import { CheatSheetDataInterface } from '@portfolio-nx-workspace/blog-admin-data';

@Component({
    selector: 'bap-md-cheatsheet',
    templateUrl: './md-cheatsheet.component.html',
    styleUrls: ['./md-cheatsheet.component.scss'],
})
export class MdCheatsheetComponent {
    @Input() public cheatSheetData: CheatSheetDataInterface[] = [];
    public showContent: boolean = false;

    public onToggleHeader(): boolean {
        // todo write setting to local storage
        return (this.showContent = !this.showContent);
    }
}
