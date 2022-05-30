module.exports = function towelSort(matrix) {
  if ((towelSort.arguments.length == 0)) {
    return [];
  } else {
    let resArr = [];
    matrix.forEach((elem, i) => {
      if (i % 2 === 0) {
        for (y = 0; y < elem.length; y++) {
          resArr.push(elem[y]);
        }
      } else if (i % 2 != 0) {
        for (y = elem.length - 1; y >= 0; y--) {
          resArr.push(elem[y]);
        }
      }
    });
    console.log(resArr);
    return resArr;
  }
}
