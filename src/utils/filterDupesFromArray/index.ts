export const filterDupesFromArray = <
  T extends {
    [key: string]: any;
  }
>(
  array: T[],
  targetKey: string,
): T[] => {
  const uniqueItems: T[] = [];

  array.forEach((item) => {
    if (
      !uniqueItems.filter(
        (uniqueItem) => uniqueItem[targetKey] === item[targetKey],
      ).length
    ) {
      uniqueItems.push(item);
    }
  });

  return uniqueItems;
};
