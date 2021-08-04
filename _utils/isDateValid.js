const isDateValid = date => {
  return (
    new Date(`${date}T00:00:00`) instanceof Date &&
    !isNaN(new Date(`${date}T00:00:00`).valueOf())
  );
};

module.exports = { isDateValid };
