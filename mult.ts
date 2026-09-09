/**
 * Returns the substract of two numbers.
 */
function mult(a: number, b: number): number {
  return a * b;
}

// Expose to window so the HTML script can call it
(window as unknown as { mult: typeof mult }).mult = mult;
