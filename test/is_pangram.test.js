const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act // Assert
    expect(isPangram(text)).toBeTruthy()
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act // Assert
    expect(isPangram(text)).toBeTruthy()

  });

  test("missing character 'x'", () => {
    // Arrange
    const missingX = 'abcdefghijklmnopqrstuvwyz';

    // Act // Assert
    expect(isPangram(missingX)).toBeFalsy();

  });

  test('empty sentence', () => {
    // Arrange
    const text = ''
    // Act // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act // Assert
    expect(isPangram(text)).toBeTruthy()
  });

  test('pangram with numbers', () => {
    // Arrange
    const nums = '123';
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    // Assert
    expect(isPangram(nums)).toBeFalsy();
    expect(isPangram(text)).toBeTruthy()

  });

  // Write your own test case
  test('works with capital letters', () => {
    const textCaps = 'AbcdefghiJklmnopqrstuvwxyz';
    const textCapsMissingX = 'AbcdefghiJklmnopqrstuvwyz';

    expect(isPangram(textCaps)).toBeTruthy();
    expect(isPangram(textCapsMissingX)).toBeFalsy();
  })
});
