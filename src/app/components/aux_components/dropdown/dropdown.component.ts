import { Component, Input } from '@angular/core';
import { DropDown } from 'src/app/models/learn/dropdown/DropDown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()
  dropdown: DropDown | null = null;

}
