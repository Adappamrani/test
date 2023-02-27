// duration.js
import moment from 'moment';

export function calculateDuration(startDatetime, stopDatetime) {
  const start = moment(startDatetime);
  const stop = moment(stopDatetime);
  const durationInMinutes = moment.duration(stop.diff(start)).asMinutes();
  return durationInMinutes;
}

export function calculateDuration2(startDatetime, stopDatetime2) {
  const start = moment(startDatetime);
  const stop2 = moment(stopDatetime2);
  const durationInMinutes = moment.duration(stop2.diff(start)).asMinutes();
  return durationInMinutes;
}

export function formatDuration(durationInMinutes) {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}