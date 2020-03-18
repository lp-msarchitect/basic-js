module.exports = function repeater(str, options = {}) {
  options.separator = options.separator || "+";
  options.additionSeparator = options.additionSeparator || "|";
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

  if (str === null) {
    str = "null";
  }

  if (options.addition === null) {
    options.addition = "null";
  }

  let additionRepeatArr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionRepeatArr.push(options.addition);
  }

  let additionRepeatStr = additionRepeatArr.join(options.additionSeparator);

  let resultArr = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    resultArr.push(str + additionRepeatStr);
  }

  let resultStr = resultArr.join(options.separator);

  return resultStr;
};
