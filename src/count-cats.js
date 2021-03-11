const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = [];
  for(let i = 0; i < matrix.length; i++){
  for(let l = 0; l < matrix[i].length; l++){
    if (matrix[i][l] == '^^'){
    count.push(matrix[i][l]);
}
 }
}
return count.length;
}
