import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheatSheetDataInterface } from '@portfolio-nx-workspace/blog-admin-data';

@Component({
    selector: 'bap-md-cheatsheet',
    templateUrl: './md-cheatsheet.component.html',
    styleUrls: ['./md-cheatsheet.component.scss'],
})
export class MdCheatsheetComponent {
    @Input() public cheatSheetData: CheatSheetDataInterface[] = [];
    @Output() public isToggled: EventEmitter<boolean> =
        new EventEmitter<boolean>();
    public showContent: boolean = false;

    public onToggleCheatSheet(): void {
        // todo write setting to local storage
        this.toggleCheatSheet();
        this.emitToggle();
    }

    public emitToggle(): void {
        this.isToggled.emit(this.showContent);
    }

    public toggleCheatSheet(): void {
        this.showContent = !this.showContent;
    }
}
