import { isNullOrUndefined } from 'util';

export class MakeOrderTest{
    constructor(
    ) { }
  
    makeOrderTest(formValue: {}){
        if (formValue !== '' && !isNullOrUndefined(formValue)){
            console.log('все хорошо');
            return true;
        }else{
            console.log('что-то пошло не так');
            return false;
        }
    }
  
}