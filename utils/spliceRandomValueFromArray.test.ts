import spliceRandomValueFromArray from "./spliceRandomValueFromArray";

describe("spliceRandomValueFromArray", () => {
  test("it splices a random number correctly", () => {
    const array = [1, 2, 3, 4];
    const originalLength = array.length;
    const splicedValue = spliceRandomValueFromArray(array);

    expect(array.length).toEqual(originalLength - 1);
    expect(array.includes(splicedValue)).toBeFalsy();

    const anotherSplicedValue = spliceRandomValueFromArray(array);

    expect(array.length).toEqual(originalLength - 2);
    expect(array.includes(anotherSplicedValue)).toBeFalsy();
  });

  test("it splices a random string correctly", () => {
    const array = ["test1", "test2", "test3", "test4"];
    const originalLength = array.length;
    const splicedValue = spliceRandomValueFromArray(array);

    expect(array.length).toEqual(originalLength - 1);
    expect(array.includes(splicedValue)).toBeFalsy();

    const anotherSplicedValue = spliceRandomValueFromArray(array);

    expect(array.length).toEqual(originalLength - 2);
    expect(array.includes(anotherSplicedValue)).toBeFalsy();
  });

  test("it splices a random object correctly", () => {
    const array = [
      { id: 1, title: "test-1" },
      { id: 2, title: "test-2" },
      { id: 3, title: "test-3" },
      { id: 4, title: "test-4" },
    ];
    const originalLength = array.length;
    const splicedValue = spliceRandomValueFromArray(array);

    expect(array.length).toEqual(originalLength - 1);
    expect(array.includes(splicedValue)).toBeFalsy();

    const anotherSplicedValue = spliceRandomValueFromArray(array);

    expect(array.length).toEqual(originalLength - 2);
    expect(array.includes(anotherSplicedValue)).toBeFalsy();
  });

  test("it does not break when passed a wrong parameter type", () => {
    // Ignore some of the below TS errors, since we deliberately pass the wrong type to test the code
    // @ts-ignore
    const spliceFromObject = spliceRandomValueFromArray({});
    const spliceFromUndefined = spliceRandomValueFromArray(undefined);
    const spliceFromNull = spliceRandomValueFromArray(null);
    // @ts-ignore
    const spliceFromString = spliceRandomValueFromArray("test");
    // @ts-ignore
    const spliceFromNumber = spliceRandomValueFromArray(26);

    expect(spliceFromObject).toEqual(null);
    expect(spliceFromUndefined).toEqual(null);
    expect(spliceFromNull).toEqual(null);
    expect(spliceFromString).toEqual(null);
    expect(spliceFromNumber).toEqual(null);
  });
});
