import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AddForm } from '../common/types';
import { getTracking, TrackingNumber } from 'ts-tracking-number';
import { mergeRight } from 'ramda';

const trackingValidator = (control: AbstractControl): ValidationErrors | null => getTracking(control.value)
  ? null
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  : { invalidTracking: { value: control.value } };

@Component({
  selector: 'manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.scss']
})
export class ManualEntryComponent implements OnInit {
  @Output() done: EventEmitter<boolean> = new EventEmitter<boolean>();

  addForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      label: '',
      trackingNumber: new FormControl('', [
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
        trackingValidator,
      ])
    });
  }

  close(): void {
    this.done.emit(true);
  }

  saveTracking(saveData: AddForm): void {
    const tn: TrackingNumber = mergeRight(getTracking(saveData.trackingNumber), { label: saveData.label });

    chrome.runtime.sendMessage({
      command: 'saveTracking',
      data: [tn]
    }, () => this.done.emit(true));
  }

  get trackingNumber(): AbstractControl {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.addForm.get('trackingNumber') as AbstractControl;
  }

}
