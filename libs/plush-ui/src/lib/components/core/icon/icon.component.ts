import { Component, Input, OnInit } from '@angular/core';
import { IconSizeType } from '../../../types';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
    standalone: true,
    selector: 'pui-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    imports: [HttpClientModule, NgClass],
})
export class IconComponent implements OnInit {
    @Input() public icon: string = 'home';
    @Input() public iconSize: IconSizeType = 'md';
    @Input() public iconColor: string = 'currentColor';

    public svgContent!: SafeHtml;

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        const url: string = `assets/icons/${this.icon}.svg`;
        this.http
            .get(url, { responseType: 'text' })
            .subscribe((svg: string): void => {
                this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
            });
    }
}
