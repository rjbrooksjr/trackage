import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StoredTrackingNumber } from '../common/types';
import { LogService } from '../services/log.service';

@Component({
  selector: 'tracking-edit',
  templateUrl: './tracking-edit.component.html',
  styleUrls: ['./tracking-edit.component.scss']
})
export class TrackingEditComponent implements OnInit {
  @Input() tracking: StoredTrackingNumber;
  @Output() done: EventEmitter<boolean> = new EventEmitter<boolean>();

  editForm;

  constructor(private formBuilder: FormBuilder, private logService: LogService) {

  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      name: this.tracking.trackingNumber,
    });
  }

  close(): void {
    this.done.emit(true);
  }

  saveTracking(saveData): void {
    console.log('savingggg', saveData);
    this.logService.background('saving', saveData);
  }

}
