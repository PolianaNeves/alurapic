import { Validators, FormGroup } from '@angular/forms';

export const userNamePasswordValidator: Validators = (formGroup: FormGroup) => {

    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if(userName.trim() + password.trim()){
        userName != password ? null : { userNamePasswordValidator: true };
    }
    else {
        return null;
    }
    
}