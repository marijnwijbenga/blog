import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdCheatsheetComponent } from './md-cheatsheet.component';
import { CardComponent, IconComponent } from '@portfolio-nx-workspace/plush-ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MdCheatsheetComponent', () => {
    let component: MdCheatsheetComponent;
    let fixture: ComponentFixture<MdCheatsheetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MdCheatsheetComponent],
            imports: [HttpClientTestingModule, CardComponent, IconComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MdCheatsheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle the cheatSheet', () => {
        jest.spyOn(component, 'onToggleCheatSheet');
        jest.spyOn(component, 'toggleCheatSheet');

        // cheatsheet toggle test here with true false check and css check
        const toggleButton = fixture.nativeElement.querySelector(
            '.md-cheatsheet__header'
        );

        expect(component.showContent).toBe(false);

        toggleButton.click();

        fixture.detectChanges();
        console.log(component.showContent);

        const content = fixture.nativeElement.querySelector(
            '.md-cheatsheet__content'
        );

        expect(component.toggleCheatSheet).toHaveBeenCalled();

        expect(component.onToggleCheatSheet).toHaveBeenCalled();
        expect(component.showContent).toBe(true);
        expect(content).toBeTruthy();
    });

    it('should emit toggle', function () {
        component.isToggled.emit = jest.fn();

        const toggleButton = fixture.nativeElement.querySelector(
            '.md-cheatsheet__header'
        );

        toggleButton.click();
        fixture.detectChanges();
        // check if being emitted here
        expect(component.isToggled.emit).toHaveBeenCalled();
    });
});
