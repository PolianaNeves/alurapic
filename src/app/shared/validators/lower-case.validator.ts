import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl){
    //todo validator recebe como parâmetro um abstract control

    //se não tiver em branco e o que chegar não segue o regex
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
        return { lowerCase: true }
    }
    return null;
}