import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import firebase, { User } from './firebase';
import axios from './axios';
import { userProfileType } from '../types/types';

declare let gapi: any;

export const AuthContext = React.createContext<{
  fireUser: User | null;
  loading: boolean;
  token: string | null;
  backendUser: userProfileType;
  signInHandler: () => void;
  signOutHandler: () => void;
  setFireUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setBackendUser: React.Dispatch<React.SetStateAction<userProfileType>>;
}>({
  fireUser: null,
  loading: false,
  token: null,
  backendUser: {} as userProfileType,
  signInHandler: () => {},
  signOutHandler: () => {},
  setFireUser: () => {},
  setToken: () => {},
  setBackendUser: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [fireUser, setFireUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(null);
  const [backendUser, setBackendUser] = React.useState<userProfileType>(
    {} as userProfileType
  );
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setFireUser(user);
        user
          .getIdToken(true)
          .then((idToken) => {
            axios
              .post<{ token: string }>('auth/login/', {
                id_token: idToken,
              })
              .then((response) => {
                setLoading(false);
                setToken(response.data.token);
              })
              .catch(() => {
                setLoading(false);
                setToken(null);
              });
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, [fireUser]);

  const signInHandler = async () => {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const authResponse = googleUser.getAuthResponse();
    const credential = firebase.auth.GoogleAuthProvider.credential(
      authResponse.id_token,
      authResponse.access_token
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        const { user } = result;
        setFireUser(user);
      })
      .catch(() => {});
  };

  const signOutHandler = async () => {
    await firebase.auth().signOut();
    setBackendUser({} as userProfileType);
    setFireUser(null);
    setToken(null);
    router.replace('/');
  };

  return (
    <AuthContext.Provider
      value={{
        fireUser,
        loading,
        token,
        backendUser,
        signInHandler,
        signOutHandler,
        setFireUser,
        setToken,
        setBackendUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
