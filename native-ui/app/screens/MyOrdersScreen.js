import React from 'react'
import {View, Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Screen from '../components/Screen'
import Title from '../components/Title'
import Ticket from '../components/Ticket'
/**
 * MyOrdersScreen
 * @description: Screen that renders a users order history
 * 
 */

const data = [
    {id: 1, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
    {id: 2, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
    {id: 3, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
    {id: 4, title: 'rap concert', price: 40, userId: 'user2', status: 'AwaitingPayment'},
    {id: 5, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
    {id: 6, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'}
]

const MyOrdersScreen = () => {
    return (
        <Screen>
            <Title title="My Orders"/>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <Ticket ticket={item} />
                )}
            />
        </Screen>
    )
}

export default MyOrdersScreen
