import { describe, it, expect } from "vitest";
import { max } from "../src/max";

describe("max", () => {
  it("returns null for an empty list", () => {
    expect(max([])).toBeNull();
  });

  it("returns the only element for a list with one item", () => {
    expect(max([5])).toBe(5);
  });

  it("returns the max from a list of numbers", () => {
    expect(max([3, 7, 2, 9, 1])).toBe(9);
  });

  it("works with negative numbers", () => {
    expect(max([-10, -20, -5])).toBe(-5);
  });

  it("works with duplicate values", () => {
    expect(max([4, 4, 4])).toBe(4);
  });
});
