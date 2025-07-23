import { count } from "../src/count";
import { describe, expect, it } from "vitest";

describe("count", () => {
  it("returns 0 for empty list", () => {
    expect(count(1, [])).toBe(0);
  });

  it("returns 1 when list has one matching element", () => {
    expect(count("a", ["a"])).toBe(1);
  });

  it("counts multiple occurrences of target", () => {
    expect(count("a", ["a", "b", "a", "c", "a"])).toBe(3);
  });

  it("works with numbers and 0", () => {
    expect(count(0, [1, 0, 2, 0, 0])).toBe(3);
  });

  it('distinguishes between 0 and "0"', () => {
    expect(count("0", [0, "0", "0"])).toBe(2);
  });
});
