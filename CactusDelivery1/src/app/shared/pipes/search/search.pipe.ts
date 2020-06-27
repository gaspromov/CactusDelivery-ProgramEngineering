import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], searchParam: string): unknown {
    
    if ( !isNullOrUndefined(searchParam) && searchParam !== ''){
      let filter = arr.filter(
        ell => 
          (ell.name+' '+ell.sername).toLowerCase().indexOf(searchParam.toLowerCase()) === 0 ||
          (ell.sername+' '+ell.name).toLowerCase().indexOf(searchParam.toLowerCase()) === 0);
      return filter;
    }

    // if ( !isNullOrUndefined(searchParam) && searchParam !== ''){
    //   let filter = arr.filter(
    //     ell => ell.surname.indexOf(String(searchParam)) === 0);
    //   return filter;
    // }
    return arr;
  }

}
