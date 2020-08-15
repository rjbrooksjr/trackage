import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoredTrackingNumber, EditForm } from '../common/types';

@Component({
  selector: 'tracking-edit',
  templateUrl: './tracking-edit.component.html',
  styleUrls: ['./tracking-edit.component.scss']
})
export class TrackingEditComponent implements OnInit {
  @Input() tracking: StoredTrackingNumber;
  @Output() done: EventEmitter<boolean> = new EventEmitter<boolean>();

  editForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      label: this.tracking.label,
    });
  }

  close(): void {
    this.done.emit(true);
  }

  saveTracking(saveData: EditForm): void {
    chrome.runtime.sendMessage({
      command: 'editTracking',
      data: { trackingNumber: this.tracking.trackingNumber, editTracking: saveData }
    }, () => this.done.emit(true));
  }

}
