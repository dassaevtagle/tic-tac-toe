import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToRoman'
})
export class ConvertToRomanPipe implements PipeTransform {
    transform(value: number) {
        var roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
          };
          var str = '';
        
          for (var i of Object.keys(roman)) {
            var q = Math.floor(value / roman[i]);
            value -= q * roman[i];
            str += i.repeat(q);
          }
        
          return str;
    }
    
}