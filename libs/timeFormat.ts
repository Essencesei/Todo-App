export const timeFormat = (time: Date) => {
  return new Intl.DateTimeFormat("en-ph", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(Number(time));
};
