import { FormGroup, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms-testing';

  discountRule = new FormGroup({
    discountPercentage: new FormControl('', []),
    discountAmount: new FormControl('', [])
  }, { validators: discountValidator });

  onSubmit() {
    console.warn(this.discountRule.value);
  }
}

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const disPer = control.get('discountPercentage').value;
//     const disAmt = control.get('discountAmount').value;
//     if (disPer && disAmt){
//       return { 'discountError': true }
//     }
//     else{
//       return null;
//     }
//   };
// }

export const discountValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const disPer = control.get('discountPercentage').value;
  const disAmt = control.get('discountAmount').value;
  console.log('disAmt: ' + disPer + ' disAmt: ' + disAmt);
  if (disPer && disAmt) {
    return { 'discountError': true };
  } else if (disAmt == null && disPer == null) {
    return { 'discountError': true }
  } else if (disAmt === '' && disPer === '') {

  }
  else {
    return null;
  }
}
