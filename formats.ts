import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
export const DATE_FORMAT = 'DD/MM/YYYY HH:mm';
export const DATE_ONLY_FORMAT = 'DD/MM/YYYY';

momentDurationFormatSetup(moment);

const isDateTimeStringOver = function (dateString, overDate) {
  const dateTime = moment(dateString, moment.ISO_8601);
  return dateTime.add(overDate, 'days').isBefore(moment());
};

const formatDateTime = function (dateString) {
  if (dateString) {
    const dateTime = moment(dateString, moment.ISO_8601);
    return dateTime.format(DATE_FORMAT);
  }
  return '_';
};

const formatDateTimeDuration = function (dateString) {
  const dateTime = moment(dateString, moment.ISO_8601);
  const duration = moment.duration(moment().diff(dateTime));
  if (duration.asMinutes() < 60) {
    return `${Math.round(duration.asMinutes())} phút `;
  }
  if (duration.asMinutes() < 1440) {
    return `${Math.round(duration.asHours())} giờ`;
  }
  return `${Math.round(duration.asDays())} ngày`;
};

const formatDate = function (dateString) {
  const dateTime = moment(dateString, moment.ISO_8601);
  return dateTime.format(DATE_ONLY_FORMAT);
};

const nowDateTimeObject = function () {
  const dateTime = moment();
  return {
    value: dateTime.format(DATE_FORMAT),
    day: dateTime.date(),
    month: dateTime.month() + 1,
    year: dateTime.year(),
  };
};

const formatVNDate = function (date) {
  const dateTime = moment(date);
  return `${dateTime.hours()} giờ ${dateTime.minutes()} phút - ngày ${dateTime.date()} tháng ${
    dateTime.month() + 1
  } năm ${dateTime.year()}`;
};

const formatVNSimpleDate = function (date) {
  const dateTime = moment(date);
  return `Ngày ${dateTime.date()} tháng ${
    dateTime.month() + 1
  } năm ${dateTime.year()}`;
};

const formatPrice = function (value) {
  return parseFloat(value).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

const formatNumber = function (value) {
  return parseFloat(value).toLocaleString('vi-VN', {
    style: 'decimal',
  });
};

const formatMinutesDuration = function (value) {
  //@ts-ignore
  return moment
    .duration(value, 'minutes')
    .format('d [ngày], h [giờ], m [phút]');
};

const formatOrderNumber = function (value: number) {
  let formattedNumber = value.toString().padStart(5, '0');
  return formattedNumber;
};

const formatPurchasingRequestNumber = function (value: number) {
  let formattedNumber = value.toString().padStart(5, '0');
  return formattedNumber;
};

export {
  formatDateTime,
  formatDateTimeDuration,
  formatDate,
  formatPrice,
  formatVNDate,
  formatNumber,
  formatMinutesDuration,
  nowDateTimeObject,
  isDateTimeStringOver,
  formatVNSimpleDate,
  formatOrderNumber,
  formatPurchasingRequestNumber,
};
