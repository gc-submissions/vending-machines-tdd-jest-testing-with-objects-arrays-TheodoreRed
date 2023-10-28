const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test(`Given total 5 and payment 6, it returns 1.`, () => {
    expect(calculateChange(5, 6)).toBe(1);
  });
  test(`Given total 12.30 and payment 13.03, it returns 0.73.`, () => {
    expect(calculateChange(12.3, 13.03)).toBe(0.73);
  });
  test(`Given total 500 and payment 600, it returns 100.`, () => {
    expect(calculateChange(500, 600)).toBe(100);
  });
});

describe("isSufficientPayment", () => {
  test(` returns true if payment is greater than or equal to total.`, () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
  });
  test(`returns false otherwise.`, () => {
    expect(isSufficientPayment(10, 7)).toBe(false);
  });
  test(`returns true if they are the same`, () => {
    expect(isSufficientPayment(3, 3)).toBe(true);
  });
  test(`returns false if the payment is negative`, () => {
    expect(isSufficientPayment(10, -10)).toBe(false);
  });
});

describe("calculateTotal", () => {
  test(` itemsArray of one item with price 4.99, it returns 4.99`, () => {
    const testArray = [{ name: "Jelly", price: 4.99 }];
    expect(calculateTotal(testArray)).toBe(4.99);
  });
  test(` itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52`, () => {
    const testArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Peanut", price: 12.99 },
      { name: "Bread", price: 0.03 },
    ];
    expect(calculateTotal(testArray)).toBe(16.52);
  });
  test(`Given an empty itemsArray, it returns 0;`, () => {
    const testArray = [];
    expect(calculateTotal(testArray)).toBe(0);
  });
  test(`itemsArray of 4 items with prices 100, 3.50, 12.99, and 0.03, it returns 116.52`, () => {
    const testArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Peanut", price: 12.99 },
      { name: "Bread", price: 0.03 },
      { name: "airpods", price: 100.0 },
    ];
    expect(calculateTotal(testArray)).toBe(116.52);
  });
});

describe("addItem", () => {
  const itemsArray = [];
  addItem(itemsArray, "Beans", 3);
  test(`itemsArray has one item in it: { name: "Beans", price: 3 }`, () => {
    expect(itemsArray[0]).toEqual({ name: "Beans", price: 3 });
  });
  test(` itemsArray has two items in it: { name: "Beans", price: 3 } and { name: "Sugar", price: 2 }`, () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    addItem(itemsArray, "Sugar", 2);
    expect(itemsArray[0]).toEqual({ name: "Beans", price: 3 });
    expect(itemsArray[1]).toEqual({ name: "Sugar", price: 2 });
  });
  test(` itemsArray has a length of 4 `, () => {
    expect().toBe();
  });
});

describe("removeItem", () => {
  test(`Remove the first element from an array of three items.`, () => {
    const itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test(`Remove the last element from an array of three items.`, () => {
    const itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ];
    removeItem(itemsArray, itemsArray.length - 1);
    expect(itemsArray).toEqual([
      { name: "Jelly", price: 3.5 },
      { name: "Beans", price: 3 },
    ]);
  });
  test(`Remove the middle element from an array of three items.`, () => {
    const itemsArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ];
    removeItem(itemsArray, itemsArray.length / 2);
    expect(itemsArray).toEqual([
      { name: "Jelly", price: 3.5 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test(`Remove the only element from an array of one item.`, () => {
    const itemsArray = [{ name: "Jelly", price: 3.5 }];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([]);
  });
});
