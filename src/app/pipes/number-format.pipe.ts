import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value:number): String {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}
