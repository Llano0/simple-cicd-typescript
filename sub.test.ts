/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
 */
declare global {
  interface Window {
    sub: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches sum to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sub.js");
});

describe("sub", () => {
  it("substracts two positive numbers", () => {
    expect(window.sub(2, 3)).toBe(-1);
  });

  it("subtracts negative numbers and positive numbers", () => {
    expect(window.sub(-1, 1)).toBe(-2);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sub(0, 0)).toBe(0);
  });
});

export {};
