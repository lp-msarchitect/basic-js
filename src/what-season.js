module.exports = function getSeason(date = null) {
  if (date === null) {
    return "Unable to determine the time of year!";
  }

  if ({}.toString.call(date).slice(8, -1) !== "Date") {
    throw "Error";
  }

  let month = date.getMonth();
  if (month < 2 || month === 11) {
    return "winter";
  }
  if (month > 1 && month < 5) {
    return "spring";
  }
  if (month > 4 && month < 8) {
    return "summer";
  }
  if (month > 7 && month !== 11) {
    return "fall";
  }
};
