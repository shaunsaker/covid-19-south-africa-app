import axios from 'axios';

interface Response<T> {
  data: T;
}

export const fetch = <T>(url: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .request({
          url,
        })
        .then((response) => {
          const {data} = response;

          resolve(data);
        });
    } catch (error) {
      reject(error);
    }
  });
};
