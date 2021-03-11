const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members) return false;
  let arr = [];
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) == "string"){
      arr.push(members[i].trim().toUpperCase().split('').slice(0, 1));
    } 
  }
 return arr.sort().join('').toString();
}
