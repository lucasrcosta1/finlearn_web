import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-input',
  templateUrl: './community-input.component.html',
  styleUrls: ['./community-input.component.css']
})
export class CommunityInputComponent {
  @Output() createPostEvent = new EventEmitter<string>();
  comment: string = ""

  clearTextArea(){
    this.comment = "";
  }

  submit() {
    this.createPostEvent.emit(this.comment)
    this.clearTextArea()
  }
}
