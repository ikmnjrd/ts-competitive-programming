const multiple = (a: number, b: number) => {
  return a * b
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe('calc', () => {
    it('multiple', () => {
      expect(multiple(2, 4)).toBe(8)
    })
  })
}