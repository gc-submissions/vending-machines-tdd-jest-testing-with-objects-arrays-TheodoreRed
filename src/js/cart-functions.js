const calculateChange = (total, payment) => {
  return +(payment - total).toFixed(2);
};
const isSufficientPayment = (total, payment) => {
  return payment >= total;
};
const calculateTotal = (array) => {
  if (array.length === 0) return 0;
  return +array
    .reduce((prev, curr) => {
      return prev + curr.price;
    }, 0)
    .toFixed(2);
};

const addItem = (array, name, price) => {
  array.push({ name, price });
};

const removeItem = (array, index) => {
  array.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
