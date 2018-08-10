import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customShorten'
})
export class UserDisplayShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

    let limit = 10;
    if (args[0]) {
      limit = args[0];
    }
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    } else {
      return value;
    }
  }

}
