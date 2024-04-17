export function getLocaleDateString(
  date: Date,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions
): string {
  return date.toLocaleDateString(locale, options);
}

export function isCurrentDate(date: Date): boolean {
  const currentDate = new Date(); // Current date
  return (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  );
}
