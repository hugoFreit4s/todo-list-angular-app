import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
type BtnSize = 'smal' | 'standard' | 'large';
type BtnStyle = 'primary' | 'secondary';

@Component({
  selector: 'custom-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [CommonModule],
  styleUrls: ['./button.component.scss'],
})
export class CustomButton {
  @Input() _size: BtnSize = 'standard';
  @Input() _style: BtnStyle = 'primary';

  get classes(): string[] {
    return [this._size, this._style];
  }
}
