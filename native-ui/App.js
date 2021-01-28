import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from './app/navigation/AppNavigator';
import TicketListingScreen from './app/screens/TicketListingScreen';
import navigationTheme from "./app/navigation/navigationTheme";
import { navigationRef } from "./app/navigation/rootNavigation";
import AuthNavigator from './app/navigation/AuthNavigator';
import logger from "./app/utility/logger";
import AuthContext from './app/auth/context';

logger.start();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{user, setUser}} >
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

