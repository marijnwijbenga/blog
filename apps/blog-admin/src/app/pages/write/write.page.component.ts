import { Component, OnInit } from '@angular/core';
import {
    CheatSheetDataInterface,
    CheatSheetService,
} from '@portfolio-nx-workspace/blog-admin-data';

@Component({
    templateUrl: './write.page.component.html',
})
export class WritePageComponent implements OnInit {
    constructor(private cheatSheetService: CheatSheetService) {}

    ngOnInit(): void {
        this.getCheatSheetData();
    }

    public cheatSheetData: CheatSheetDataInterface[] = [];
    public error: string = '';

    public getCheatSheetData(): void {
        this.cheatSheetService.getCheatSheetData().subscribe({
            next: (cheatSheetData: CheatSheetDataInterface[]) => {
                this.cheatSheetData = cheatSheetData;
            },
            error: (error) => {
                this.error = error;
            },
        });
    }

    public onToggleCheatSheet(isToggled: boolean): void {
        console.log(isToggled);
        // TODO write to local storage
    }
}
