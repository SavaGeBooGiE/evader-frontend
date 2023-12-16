/* eslint-disable import/prefer-default-export */
import React from 'react';
import firebase from '../context/firebase';

const storage = firebase.storage();

export const useEventAvatarFetcherService = (fireId: string) => {
  const [url, setUrl] = React.useState<string>('');

  React.useEffect(() => {
    let isMounted = true;
    const storageRef = storage.refFromURL(
      `gs://evader-2edf2.appspot.com/events/${fireId}.png`
    );
    storageRef
      .getDownloadURL()
      .then((downloadURL: string) => {
        if (isMounted) {
          setUrl(downloadURL);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  return url;
};
