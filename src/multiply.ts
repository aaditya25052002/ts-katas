export const multiply = (...nums: number[]) => {
  let product = 1;
  for (let num of nums) {
    product *= num;
  }

  return product;
};
