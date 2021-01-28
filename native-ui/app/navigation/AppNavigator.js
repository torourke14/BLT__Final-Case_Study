import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TicketListingScreen from '../screens/TicketListingScreen'
import SellTicketsScreen from '../screens/SellTicketsScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import SignOut from '../components/dummyHelperFiles/SignOut'
import TicketListNavigator from './TicketListNavigator'

const Tab = createBottomTabNavigator()

/**
 * AppNavigator
 * @description: Used for main app use navigation
 * 
 */
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MyOrders" component={MyOrdersScreen} />
            <Tab.Screen name="SellTickets" component={SellTicketsScreen} />
            <Tab.Screen name="SignOut" component={SignOut} />
            <Tab.Screen name="TicketList" component={TicketListNavigator} />
        </Tab.Navigator>
    )
}

export default AppNavigator