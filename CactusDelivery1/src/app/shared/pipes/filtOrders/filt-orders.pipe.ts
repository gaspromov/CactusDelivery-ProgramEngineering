import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtOrders'
})
export class FiltOrdersPipe implements PipeTransform {

  transform(arr: any[], deliveried: boolean, inProcess: boolean, noCarrier: boolean, willArrive: boolean): unknown {
    let d = '1';
    let i = '1';
    let n = '1';
    let w = '1'

    if (deliveried)
      d = "Доставлено";
    if (inProcess)
      i = "Доставляется";
    if (noCarrier)
      n = "Ищем доставщика";
    if (willArrive)
      w = "Выехали за посылкой";
      
    
    if ( deliveried || inProcess || noCarrier || willArrive){
      let filter = arr.filter(
        ell =>  ell.status.indexOf(d) === 0 || ell.status.indexOf(i) === 0 ||
          ell.status.indexOf(n) === 0 || ell.status.indexOf(w) === 0);
      
      return filter;
    }

    return arr;
  }

}
