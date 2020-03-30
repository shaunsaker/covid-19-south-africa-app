import firestore from '@react-native-firebase/firestore';

export function sync<T>(
  collection: string,
  cb: (data: T | {[key: string]: any}) => void,
) {
  return new Promise(async (resolve, reject) => {
    try {
      const unsubscribe = firestore()
        .collection(collection)
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((document) => {
            return {
              ...document.data(),
              id: document.id,
            };
          });

          cb(data);
        });

      resolve(unsubscribe);
    } catch (error) {
      reject(error);
    }
  });
}
