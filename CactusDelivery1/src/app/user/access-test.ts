export class AccessTest{
    constructor(){}

    accessTest(userStatus: string){
        if (userStatus === '1'){
            console.log('права выданы верно');
            return true;
        }else{
            console.log('права выданы неверно');
            return false;
        }
    }
}