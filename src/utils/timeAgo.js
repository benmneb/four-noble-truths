const MINUTE = 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  MONTH = WEEK * 4,
  YEAR = DAY * 365;

export function getTimeAgo(date) {
  const secondsAgo = Math.round((+new Date() - date) / 1000);

  if (secondsAgo <= 45) {
    return 'just now';
  } else if (secondsAgo > 45 && secondsAgo <= MINUTE * 45) {
    let timePeriod = Math.floor(secondsAgo / MINUTE);
    if (timePeriod <= 1) return 'a minute ago';
    else return timePeriod + ' minutes ago';
  } else if (secondsAgo > MINUTE * 45 && secondsAgo <= HOUR * 21) {
    let timePeriod = Math.floor(secondsAgo / HOUR);
    if (timePeriod <= 1) return 'an hour ago';
    else return timePeriod + ' hours ago';
  } else if (secondsAgo > HOUR * 21 && secondsAgo <= DAY * 6) {
    let timePeriod = Math.floor(secondsAgo / DAY);
    if (timePeriod <= 1) return 'a day ago';
    else return timePeriod + ' days ago';
  } else if (secondsAgo > DAY * 6 && secondsAgo <= DAY * 25) {
    let timePeriod = Math.floor(secondsAgo / WEEK);
    if (timePeriod <= 1) return 'a week ago';
    else return timePeriod + ' weeks ago';
  } else if (secondsAgo > DAY * 25 && secondsAgo <= DAY * 320) {
    let timePeriod = Math.floor(secondsAgo / MONTH);
    if (timePeriod <= 1) return 'a month ago';
    else return timePeriod + ' months ago';
  } else if (secondsAgo > DAY * 320) {
    let timePeriod = Math.floor(secondsAgo / YEAR);
    if (timePeriod <= 1) return 'a year ago';
    else return timePeriod + ' years ago';
  }
}
