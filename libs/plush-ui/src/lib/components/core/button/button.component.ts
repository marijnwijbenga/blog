import { Component } from '@angular/core';
import { test } from '@angular-devkit/core/src/virtual-fs/host';

@Component({
  selector: 'pui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  protected readonly test = test;
}
