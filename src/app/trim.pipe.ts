import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimWhiteSpace'
})
export class TrimWhiteSpacePipe implements PipeTransform {

  transform(value: any): any {
    (!value) ? '' : value.replace(/ /g, '');
  }

}
