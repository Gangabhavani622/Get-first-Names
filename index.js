const people_names = require("../country/state/city/index");
const utility = require("../utilities/utils/index");

function getPeopleInCity() {
  let firstNames = utility(people_names);
  return firstNames;
}
console.log(getPeopleInCity());
module.exports = getPeopleInCity;
