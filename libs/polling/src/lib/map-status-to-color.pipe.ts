import { Pipe, PipeTransform } from '@angular/core';

const _statusToColor = {
  pending: 'accent',
  success: 'primary',
  error: 'warn',
} as const;
type StatusToColor = typeof _statusToColor;
type StatusToColorKeys = keyof StatusToColor;

@Pipe({
  name: 'mapStatusToColor',
})
export class MapStatusToColorPipe implements PipeTransform {
  transform(value: StatusToColorKeys): StatusToColor[StatusToColorKeys] {
    return _statusToColor[value];
  }
}
