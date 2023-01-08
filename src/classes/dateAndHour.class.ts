abstract class DateAndTime {
  public static createDateObject(date: string, hour: string) {
    const getYearMonthDay = date.split("/");
    const getHoursMinutes = hour.split(":");

    const dateObject = new Date(
      +getYearMonthDay[0],
      +getYearMonthDay[1] - 1,
      +getYearMonthDay[2],
      +getHoursMinutes[0],
      +getHoursMinutes[1]
    );

    return dateObject;
  }

  public static getWeekDay(date: Date) {
    const getDataStrings = date.toString().split(" ");
    const weekDay = getDataStrings[0];

    return weekDay;
  }

  public static getHour(date: Date) {
    const getDataStrings = date.toString().split(" ");
    const hour = getDataStrings[4];

    return hour;
  }
}

export default DateAndTime;
