export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface DateEvents {
  from: string;
  date: Date;
  dateStr: string;
  dayOfWeek: number;
  dayOfWeekStr: string;
  day: number;
  month: number;
  year: number;
  events: Event[];
  isToday: boolean;
}

export interface Event {
  eventName: string;
  fromTime: number;
  toTime: number;
  eventStyle: EventStyle;
}

export interface EventStyle {
  column: string;
  style: string;
}

export interface Month {
  id: number;
  name: string;
}