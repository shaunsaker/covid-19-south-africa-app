// sorts an array of objects by key
// with optional reverse order functionality
const sortArrayOfObjectsByKey = (
  array: any[],
  key: string,
  reverseOrder?: boolean,
) => {
  const sortedArray = array.sort((a, b) => {
    return a[key] > b[key] ? (reverseOrder ? -1 : 1) : reverseOrder ? 1 : -1;
  });
  return sortedArray;
};

export {sortArrayOfObjectsByKey};
