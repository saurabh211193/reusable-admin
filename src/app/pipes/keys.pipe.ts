import { KeysResult } from './keys.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args: string[]): KeysResult[] {
    const keys: KeysResult[] = [];
    for (const key of Object.keys(value)) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }

}

export interface KeysResult {
  key: string;
  value: any;
}
