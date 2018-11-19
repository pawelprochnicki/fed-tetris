import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'best'
})
export class BestPipe implements PipeTransform {

  transform(values: any, field?: string, num?: number): any {
    if (!values) {
      return false;
    }
    values.sort((a, b) => {
      return b[field] - a[field];
    });

    return values.slice(0, num);
  }

}
