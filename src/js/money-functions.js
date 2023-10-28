"use strict";

const formatCurrency = (num) => {
  let result = num.toFixed(2);
  if (num < 0) {
    result = result.replace("-", "");
    return "-$" + result;
  } else return "$" + result;
};

const getCoins = (cents) => {
  let result = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  while (cents) {
    if (cents >= 25) {
      cents -= 25;
      result.quarters++;
    } else if (cents >= 10) {
      cents -= 10;
      result.dimes++;
    } else if (cents >= 5) {
      cents -= 5;
      result.nickels++;
    } else {
      cents -= 1;
      result.pennies++;
    }
  }
  return result;
};

module.exports = {
  formatCurrency,
  getCoins,
};
