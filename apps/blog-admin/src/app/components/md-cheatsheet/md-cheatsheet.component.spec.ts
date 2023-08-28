import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCheatsheetComponent } from './md-cheatsheet.component';

describe('MdCheatsheetComponent', () => {
    let component: MdCheatsheetComponent;
    let fixture: ComponentFixture<MdCheatsheetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MdCheatsheetComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MdCheatsheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
