import { FormGroup } from "@angular/forms"

export const PasswordsMatchValidator = (passwordControlName: string,
    confirmPasswordControlName: string) => {
      return(formGroup: FormGroup) => {
        const passwordControl = formGroup.controls[passwordControlName];
        const confirmPasswordControl = formGroup.controls[confirmPasswordControlName];
        if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']){
          return;
        }
        if(passwordControl.value !== confirmPasswordControl.value){
          confirmPasswordControl.setErrors({passwordMismatch: true});
          confirmPasswordControl.markAsDirty();
          confirmPasswordControl.markAsTouched();

        }else{
          confirmPasswordControl.setErrors(null);
        }
      }
    }
