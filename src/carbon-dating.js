const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  /*if (
    typeof sampleActivity !== "string" ||
    isNaN(+sampleActivity) ||
    +sampleActivity < 0
  ) {
    return false;
  }
  let age = Math.ceil(
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
      (0.693 / HALF_LIFE_PERIOD)
  );
  return age;*/
  if (
    typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    +sampleActivity <= 0 ||
    +sampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  } else {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
        (0.693 / HALF_LIFE_PERIOD)
    );
  }
};
