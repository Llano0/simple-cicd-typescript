/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
 */
declare global {
  interface Window {
    div: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches sum to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./div.js");
});

describe("div", () => {
  it("divides two positive numbers", () => {
    expect(window.div(1, 1)).toBe(1);
  });

  it("divides negative numbers and positive numbers", () => {
    expect(window.div(-1, 1)).toBe(-1);
  });

  it("returns 0 when both are 0", () => {
    expect(window.div(0, 0)).toBe(0);
  });
});

export {};
