const divide = (a: number, b: number) => {
  return a / b
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe('calc', () => {
    it('divide', () => {
      expect(divide(8, 4)).toBe(2)
    })
  })
}