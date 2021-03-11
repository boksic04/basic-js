const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  let seasons = ["winter", "spring", "summer", "autumn"];
  if(!date) return 'Unable to determine the time of year!';
  if(date.getTime() == "undefined") return 'THROWN';
  if (Math.round(date.getMonth()/3) == 4) {
    return seasons[0];
  } else {
  return seasons[Math.round(date.getMonth()/3)];
  }
}
