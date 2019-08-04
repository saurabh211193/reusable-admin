import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listS3Data'
})
export class ListS3DataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      if (value.length) {
        const data = value.shift();
        const list = [];
        value.array.forEach(element => {
          const el = element.substr(this.getPosition(element, '/', 2));
          list.push({ Key: el, Size: element.Size });
        });
        return list;
      }

    } catch (e) {

    }

  }

  getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

}
