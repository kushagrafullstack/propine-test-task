const dateToEpochTime = date => {
  date = new Date(`${date}T00:00:00`);
  let userTimezoneOffset = date.getTimezoneOffset() * 60 * 1000;
  const startTimestamp =
    parseInt(new Date(date.getTime() - userTimezoneOffset).getTime()) / 1000;
  const endTimestamp =
    parseInt(
      new Date(
        date.getTime() + 24 * 60 * 60 * 1000 - userTimezoneOffset,
      ).getTime(),
    ) / 1000;

  return [startTimestamp, endTimestamp];
};

module.exports = { dateToEpochTime };
