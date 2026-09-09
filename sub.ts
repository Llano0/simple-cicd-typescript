/**
 * Returns the substract of two numbers.
 */
function sub(a: number, b: number): number {
  return a - b;
}

// Expose to window so the HTML script can call it
(window as unknown as { sub: typeof sub }).sub = sub;
