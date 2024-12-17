import { differenceInDays, differenceInHours, differenceInMinutes, format, parse } from "date-fns";

export const getDateString = (dateString: string | Date) => {
  let date;
  if (typeof dateString === 'string') {
    date = parse(dateString, "MM/dd/yy HH:mm:ss", new Date());
  } else {
    date = dateString;
  }
  const now = new Date();
  const diffInDays = differenceInDays(now, date);
  const diffInHours = differenceInHours(now, date);
  const diffInMinutes = differenceInMinutes(now, date);

  if (diffInDays === 0) {
    // Today
    if (diffInMinutes < 60) {
      return diffInMinutes + " minutes ago";
    } else if (diffInHours === 1) {
      return "1 hour ago";
    } else if (diffInHours === 0) {
      return "just now";
    } else {
      return `${diffInHours} hours ago`;
    }
  } else if (diffInDays === 1) {
    // Yesterday
    return `Yesterday at ${format(date, "h:mm a")}`;
  } else if (diffInDays < 10) {
    // Within 10 days
    return `${diffInDays} days ago at ${format(date, "h:mm a")}`;
  } else {
    // More than 10 days ago
    return format(date, "MMM d, yyyy") + " at " + format(date, "h:mm a");
  }
};