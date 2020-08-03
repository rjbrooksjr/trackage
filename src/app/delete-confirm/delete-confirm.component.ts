import { Component, OnInit, Input, ApplicationRef, Output, EventEmitter } from '@angular/core';
import { StoredTrackingNumber } from '../common/types';

@Component({
  selector: 'delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {
  @Input() tracking: StoredTrackingNumber;
  @Output() confirmed: EventEmitter<StoredTrackingNumber> = new EventEmitter<StoredTrackingNumber>();

  confirm = false;

  constructor(private appRef: ApplicationRef) { }

  ngOnInit(): void {
    //
  }

  confirmDelete(): void {
    this.confirm = true;
    this.appRef.tick();

    setTimeout(() => {
      this.confirm = false;
      this.appRef.tick();
    }, 5000);
  }

  delete(): void {
    this.confirmed.emit(this.tracking);
  }
}
