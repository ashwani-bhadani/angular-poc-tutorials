import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  standalone: true
})
export class CurrencyConverterPipe implements PipeTransform {
  //ye transform function data ko transform karta hai, value ka type fix karo, return value 
  // & arguments many 
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return value;
  // }
  //converts USD to INR, or Yuan to custom exchange multiplier rate to get INR, to use it example:
  //<h1>Amount = {{amount | currencyConverter: 12}} INR</h1>, 12 is my argument
  transform(value: number, ...args: number[]): number {
    console.log(args)

    if(args.length>0){
          let [conversionFactor] = args
          return value*conversionFactor
    } else {
          return value*80;
    }

  }

}
