import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TicketListingScreen from '../screens/TicketListingScreen'
import SellTicketsScreen from '../screens/SellTicketsScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import SignOut from '../components/dummyHelperFiles/SignOut'
import TicketListNavigator from './TicketListNavigator'
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator()

/**
 * AppNavigator
 * @description: Used for main app use navigation
 * 
 */
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="MyOrders" 
                component={MyOrdersScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="history" size={28} color="black" />
                    )
                }}
            />
            <Tab.Screen 
                name="SellTickets" 
                component={SellTicketsScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="price-tag" size={28} color="black" />
                    )
                }}
            />
            <Tab.Screen 
                name="TicketList" 
                component={TicketListNavigator}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Foundation name="pricetag-multiple" size={28} color="black" />
                    )
                }}
            />
            <Tab.Screen 
                name="SignOut" 
                component={SignOut} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="sign-out" size={28} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator