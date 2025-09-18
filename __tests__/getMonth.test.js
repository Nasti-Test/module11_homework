const getMonth = require('../getMonth');

describe('Valid month numbers', () => {
  test('should return "январь" for n=1', () => {
    expect(getMonth(1)).toBe('январь');
  });

  test('should return "июнь" for n=6', () => {
    expect(getMonth(6)).toBe('июнь');
  });

  test('should return "декабрь" for n=12', () => {
    expect(getMonth(12)).toBe('декабрь');
  });
});

describe('Invalid month numbers', () => {
  test('should return error for n=0', () => {
    expect(getMonth(0)).toBe('Неверный номер месяца');
  });

  test('should return error for n=13', () => {
    expect(getMonth(13)).toBe('Неверный номер месяца');
  });

  test('should return error for negative n', () => {
    expect(getMonth(-5)).toBe('Неверный номер месяца');
  });
});

describe('Non-number inputs', () => {
  test('should return error for null', () => {
    expect(getMonth(null)).toBe('Неверный номер месяца');
  });

  test('should return error for string', () => {
    expect(getMonth('1')).toBe('Неверный номер месяца');
  });

  test('should return error for undefined', () => {
    expect(getMonth(undefined)).toBe('Неверный номер месяца');
  });

  test('should return error for float number', () => {
    expect(getMonth(5.5)).toBe('Неверный номер месяца');
  });
});

describe('All months test', () => {
  const months = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];
  
  for (let i = 1; i <= 12; i++) {
    test(`should return correct month for n=${i}`, () => {
      expect(getMonth(i)).toBe(months[i - 1]);
    });
  }
});