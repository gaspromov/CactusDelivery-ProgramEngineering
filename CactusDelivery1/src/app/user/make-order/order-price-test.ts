export class OrderPriceTest{
    constructor(){}

    orderPriceTest(tarrif: string, distance: string, price: number){
        if (tarrif !== null && distance !== null && price !== null){
            if (Number(tarrif) * Number(distance) == price){
                console.log('подсчеты верны');
                return true;
            }
        }else{
            console.log("что-то пошло не так");
            return false;
        }
    }
}