import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapStatusToColor'
})
export class MapStatusToColorPipe implements PipeTransform {

  transform(value: string): unknown {
    return {
      pending: 'accent',
      success: 'primary',
      error: 'warn'
    }[value];
  }

}
