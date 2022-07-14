export const getDayFromDateString = (date: string) => {
  const d = new Date(date);
  const day = d.getDay();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[day];
};
