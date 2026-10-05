import { divide } from '../src/calculator.js';

describe('divide function tests', () => {
  // 1. Positiivinen testi
  test('jakolasku toimii valideilla numeroilla', () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Negatiivinen testi: a ei ole numero
  test('heittää TypeError kun a ei ole numero', () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  // 3. Negatiivinen testi: b ei ole numero
  test('heittää TypeError kun b ei ole numero', () => {
    expect(() => divide(10, null)).toThrow(TypeError);
  });

  // 4. Negatiivinen testi: NaN-syöte
  test('heittää TypeError kun argumenttina on NaN', () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  // 5. Negatiivinen testi: Nollalla jakaminen
  test('heittää RangeError kun jaetaan nollalla', () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });
});