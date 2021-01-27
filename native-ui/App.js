import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator';
import TicketListingScreen from './app/screens/TicketListingScreen';
import navigationTheme from "./app/navigation/navigationTheme";
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
       <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
