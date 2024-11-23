import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, type : string) : string
  {
    switch (type)
    {
      case 'Even':
        return value % 2 == 0 ? 'It is even' : 'It is not even';
      case 'Odd':
        return value % 2 !== 0 ? 'It is odd' : 'It is not odd';
      case 'Prime':
        return this.isPrime(value) ? 'It is prime' : 'It is not prime';
      case 'Perfect':
        return this.isPerfect(value) ? 'It is perfect' : 'It is not perfect';
      default:
        return 'Invalid type';
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }

}
