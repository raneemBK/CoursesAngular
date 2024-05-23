import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtter',
  standalone: true
})
export class FiltterPipe implements PipeTransform {

  transform(value: any[], filterText: string) {
    if (value.length == 0 || filterText==''){
      return value;
    }
    else return value.filter((c)=>{
      return c.coursename.toLowerCase() == filterText.toLowerCase();
    })
  }

}
