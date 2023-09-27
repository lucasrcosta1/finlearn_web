import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {
  transform(value: number | null): string {
    if (value) {

      const hours = Math.floor(value / 3600000); // 1 hour = 3600000 ms
      const minutes = Math.floor((value % 3600000) / 60000); // 1 minute = 60000 ms
      const seconds = Math.floor((value % 60000) / 1000); // 1 second = 1000 ms
  
      const hoursString = (hours < 10) ? `0${hours}` : hours;
      const minutesString = (minutes < 10) ? `0${minutes}` : minutes;
      const secondsString = (seconds < 10) ? `0${seconds}` : seconds;
  
      return `${hoursString}:${minutesString}:${secondsString}`;

    } 
    return "-";
  }
}