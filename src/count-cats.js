module.exports = function countCats(backYard) {
  let catsCount = 0;
  for (let i = 0; i < backYard.length; i++) {
    for (let j = 0; j < backYard[i].length; j++) {
      if (backYard[i][j] === "^^") {
        catsCount = catsCount + 1;
      }
    }
  }
  return catsCount;
};
