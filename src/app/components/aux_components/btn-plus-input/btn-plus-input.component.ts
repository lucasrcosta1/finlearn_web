import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-plus-input',
  templateUrl: './btn-plus-input.component.html',
  styleUrls: ['./btn-plus-input.component.css']
})
export class BtnPlusInputComponent {
  @Input()
  public iconClass = "";
  @Input()
  public commentary = "";
}
