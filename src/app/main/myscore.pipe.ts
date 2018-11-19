import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myscore'
})
export class MyscorePipe implements PipeTransform {

  transform(values: any, field: string, name: string): any {
    if (!values) {
      return false;
    }
    return values.filter((item) => {
      return item[field].toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }

}
