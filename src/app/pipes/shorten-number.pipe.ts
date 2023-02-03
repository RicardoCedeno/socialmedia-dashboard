import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenNumber'
})
export class ShortenNumberPipe implements PipeTransform {

  transform(value:number):string {
    if(value>=10000){
      return Math.trunc((value/1000))+'k'
    }
    else{
      return value.toString();
    }
  }

}
