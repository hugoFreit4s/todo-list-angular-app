import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  standalone: true,
  templateUrl: './input.component.html',
  imports: [CommonModule],
  styleUrls: ['./input.component.scss'],
})
export class CustomInput {
  @Input() _name: string = '';
  @Input() _type: string = 'text';
  @Input() _id: string = '';
}
