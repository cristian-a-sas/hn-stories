/**
 * Helper function that splices a random value from an existing array and returns that value.
 * Warning: The function uses the ".splice" method, so it mutates the array passed to it.
 * @param array
 */

function spliceRandomValueFromArray<T>(array: Array<T>): T | null {
  return Array.isArray(array)
    ? array.splice(Math.floor(Math.random() * array.length), 1)[0]
    : null;
}

export default spliceRandomValueFromArray;
