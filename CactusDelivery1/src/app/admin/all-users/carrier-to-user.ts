export class CarrierToUserTest{

    constructor(){}
    
    carrierToUserTest(oldUserStatus: string, newUserStatus: string ){
        if (oldUserStatus === "2" && newUserStatus === "1"){
            console.log("доставщик успешно изменен на клиента");
            return true;
        }else{
            console.log('что-то пошло не так');
            return false;
        }
    }

}