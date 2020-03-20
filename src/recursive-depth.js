module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let isPlate = true;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        isPlate = false;
        for (let j = 0; j < arr[i].length; j++) {
          newArr.push(arr[i][j]);
        }
      }
    }
    if (isPlate) {
      return 1;
    } else {
      return 1 + this.calculateDepth(newArr);
    }
  }
};
