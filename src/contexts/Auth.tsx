import React, { createContext, useState, useContext, useEffect } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import { AuthContextData, AuthData } from '../interfaces';
import { authService } from '../services';
import { LoginPayload } from '../slices';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<any> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    setTimeout(() => {
      loadStorageData();
    }, 3000);
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await EncryptedStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async (params: LoginPayload) => {
    try {
      //call the service passing credential (email and password).
      //In a real App this data will be provided by the user from some InputText components.
      const _authData = await authService.auth.login(params);

      if (_authData && _authData.data) {
        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(_authData?.data);

        //Persist the data in the Async Storage
        //to be recovered in the next user session.
        await EncryptedStorage.setItem(
          '@AuthData',
          JSON.stringify(_authData.data),
        );
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      //Remove data from context, so the App can be notified
      //and send the user to the AuthStack
      setAuthData(undefined);
      //Remove the data from Async Storage
      //to NOT be recovered in next session.
      await EncryptedStorage.removeItem('@AuthData');
      // await EncryptedStorage.clear();
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
