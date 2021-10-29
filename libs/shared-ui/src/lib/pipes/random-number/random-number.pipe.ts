import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNumber',
})
export class RandomNumberPipe implements PipeTransform {
  transform<T>(value: T[]): T {
    const length = value.length - 1;
    return value[Math.floor(Math.random() * length)];
  }
}
