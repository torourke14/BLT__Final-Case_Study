import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TicketListingScreen from '../screens/TicketListingScreen'
import TicketDetailScreen from '../screens/TicketDetailScreen'

const Stack = createStackNavigator()

const TicketListNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Tickets" component={TicketListingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TicketDetails" component={TicketDetailScreen}/>
    </Stack.Navigator>
)

export default TicketListNavigator