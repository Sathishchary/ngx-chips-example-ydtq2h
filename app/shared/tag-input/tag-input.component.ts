import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { throwError, of, empty } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TagInputComponent as SourceTagInput } from 'ngx-chips';
export interface AutoCompleteModel {
   value: any;
   display: string;
}

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {
  @ViewChild('tagInput')
  tagInput: SourceTagInput;


  public validators = [ this.must_be_email.bind(this) ];
  public errorMessages = {
      'must_be_email': 'Please be sure to use a valid email format'
  };
  public onAddedFunc = this.beforeAdd.bind(this);

  private addFirstAttemptFailed = false;

  private must_be_email(control: FormControl) {        

      if (this.addFirstAttemptFailed && !this.validateEmail(control.value)) {
          return { "must_be_email": true };
      }
      return null;
  }
  constructor() { }

  ngOnInit() {
  }

  private beforeAdd(tag: string) {

    if (!this.validateEmail(tag)) {
      if (!this.addFirstAttemptFailed) {
        this.addFirstAttemptFailed = true;
        this.tagInput.setInputValue(tag);
      }
 
      return throwError(this.errorMessages['must_be_email']);
      //return of('').pipe(tap(() => setTimeout(() => this.tagInput.setInputValue(tag))));
      
    }
    this.addFirstAttemptFailed = false;
    return of(tag);
  }
  private validateEmail(text: string) {
    var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
    return (text && EMAIL_REGEXP.test(text));
  }
}