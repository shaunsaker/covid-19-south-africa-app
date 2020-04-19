import {filterDupesFromArray, sortArrayOfObjectsByKey} from '../../utils';
import {countriesApiSource} from '../../config';

export const processCountryData = <
  T extends {},
  S extends {
    [key: string]: any;
  }
>(
  data: S,
  targetKey: string,
): T[] => {
  const processedData: T[] = filterDupesFromArray(
    sortArrayOfObjectsByKey(
      Object.keys(data)
        .map((key) => {
          const dateCreated = key;
          const value = data[key];
          const dateAdded = key;
          const href = countriesApiSource;
          const id = key;
          const object = {
            dateAdded,
            confirmedCases: value,
            dateCreated,
            href,
            id,
          };

          // @ts-ignore
          object[targetKey] = value;

          return object;
        })
        .filter((confirmedCase) => confirmedCase.confirmedCases),
      targetKey,
      true,
    ),
    targetKey,
  );

  return processedData;
};
