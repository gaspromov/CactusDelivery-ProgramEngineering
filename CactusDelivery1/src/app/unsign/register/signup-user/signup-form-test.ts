export class SignupFormTest{
    constructor(){}

    signupFormTest(formValue: {}){
        if (formValue !== null){
            console.log('данные записываются');
        }else{
            console.log('данные не записываются');
        }
    }
}