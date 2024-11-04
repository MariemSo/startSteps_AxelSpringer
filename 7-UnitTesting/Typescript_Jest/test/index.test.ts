import { add, multiply } from "../src/index";

describe("Math Functions", () => {
  it("Should add 5 and 3 correctly", () => {
    const result = add(5, 3);
    expect(result).toBe(8);
  });
  it("Should multiply 4 by 2 correctly", () => {
    const result = multiply(4, 2);
    expect(result).toBe(8);
  });
});
