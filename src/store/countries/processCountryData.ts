import moment from 'moment';
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
          /*
           * The key is in American date format, MM/DD/YY
           */
          const formattedDate = moment(key).toISOString();
          const dateCreated = formattedDate;
          const dateAdded = formattedDate;
          const href = countriesApiSource;
          const id = key;
          const object = {
            dateAdded,
            dateCreated,
            href,
            id,
          };
          const value = data[key];

          // @ts-ignore
          object[targetKey] = value;

          return object;
        })
        .filter((item) => item),
      targetKey,
      true,
    ),
    targetKey,
  );

  return processedData;
};
