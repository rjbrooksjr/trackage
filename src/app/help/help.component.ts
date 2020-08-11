import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { HelpForm } from '../common/types';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  helpForm: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.helpForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      text: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  get email(): AbstractControl {
    return this.helpForm.get('email');
  }

  get text(): AbstractControl {
    return this.helpForm.get('text');
  }

  sendHelp(data: HelpForm): void {
    this.httpService.sendHelp(data).subscribe(() => this.formSubmitted = true);
  }
}
