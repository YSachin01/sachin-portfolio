import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString'
})
export class TrimStringPipe implements PipeTransform {

  transform(value: unknown,numberOfString:number): string {
    if (typeof value === 'string' && value.length > numberOfString) {
      return value.substr(0, numberOfString) + '......';
    }
    return typeof value === 'string' ? value : '';
  }
  
}
