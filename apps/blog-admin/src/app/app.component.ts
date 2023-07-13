import { Component } from '@angular/core';

@Component({
    selector: 'bap-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title: string = 'blog-layout';
    public bool = false;

    public test = false;

    public myFun(): null {
        return null;
    }

    public test2 = (param1: number): string => {
        param1++;
        return 'string' + param1;
    };
}
