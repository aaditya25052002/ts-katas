export const fizzBuzz = (n: number) => {
  if (n % 3 == 0 && n % 5 == 0) return "fizzBuzz";
  if (n % 3 == 0) return "fizz";
  if (n % 5 == 0) return "buzz";

  return n;
};
