import { describe, expect, it } from "vitest";
import { fizzBuzz } from "../src/fizzBuzz";

describe("FizzBuzz", () => {
  it("should return 1 for 1", () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it("should return 2 for 2", () => {
    expect(fizzBuzz(2)).toBe(2);
  });

  it("should return fizz for 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("should return 4 for 4", () => {
    expect(fizzBuzz(4)).toBe(4);
  });

  it("should return buzz for 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("should return fizzBuzz for 15", () => {
    expect(fizzBuzz(15)).toBe("fizzBuzz");
  });
});
