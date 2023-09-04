import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheatSheetDataInterface } from '../interfaces';
import { CHEAT_SHEET_DATA } from '../const';

@Injectable({
    providedIn: 'root',
})
export class CheatSheetService {
    public getCheatSheetData(): Observable<CheatSheetDataInterface[]> {
        return of(CHEAT_SHEET_DATA);
    }
}
