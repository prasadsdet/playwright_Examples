import moment from 'moment';

export default class DateUtil {

   public static dateGenerator(format: string, days: number, months: number, years: number): string {
      const date = moment().add(days, 'd').add(months, 'M').add(years, 'y').format(format);
      return date;
   }

   public static dateCustomizer(date: string, format: string, days: number, months: number, years: number): string {
      const customDate = moment(date, format).add(days, 'd').add(months, 'M').add(years, 'y').format(format);
      return customDate;
   }


   public static timeGenerator(format: string, hours: number, minutes: number): string {
      const time = moment().add(minutes, 'm').add(hours, 'h').format(format);
      return time;
   }
}
