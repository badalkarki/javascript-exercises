const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Badal', () => {
    expect(values.firstName).toEqual('Badal');
  });
  test('lastName is Karki', () => {
    expect(values.lastName).toEqual('Karki');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2005', () => {
    expect(values.birthYear).toEqual(2005);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Badal Karki and I am 20 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Badal Karki', () => {
    expect(values.fullName).toEqual('Badal Karki');
  });
  test('age is 20', () => {
    expect(values.age).toEqual(20);
  });
});
