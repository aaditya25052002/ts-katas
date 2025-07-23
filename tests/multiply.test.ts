import { describe, it, expect } from "vitest";
import { multiply } from "../src/multiply";

describe("Multiply", () => {
  it("returns 1 for nothing", () => {
    expect(multiply()).toBe(1);
  });

  it("return the number when a single number is given", () => {
    expect(multiply(5)).toBe(5);
  });

  it("returns the product of two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("returns the product of all the numbers given", () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  it("returns the product when multiplied by 0", () => {
    expect(multiply(0, 0, 0)).toBe(0);
  });

  it("returns the product of negative numbers", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});
