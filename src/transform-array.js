module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (resultArr.length > 0) {
          resultArr.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          resultArr.push(arr[i + 1]);
        }

        break;
      case "--double-prev":
        if (i > 0) {
          resultArr.push(arr[i - 1]);
        }
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }
  }

  return resultArr;
};
