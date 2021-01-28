import React, {useState} from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Screen from '../components/Screen'
import Title from '../components/Title'
import TicketWithStatus from '../components/TicketWithStatus'


const data = [
    {id: 1, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
    {id: 2, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
    {id: 3, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
    {id: 4, title: 'rap concert', price: 40, userId: 'user2', status: 'AwaitingPayment'},
    {id: 5, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
    {id: 6, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'},
    {id: 7, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
    {id: 8, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
    {id: 9, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
    {id: 10, title: 'rap concert', price: 40, userId: 'user2', status: 'AwaitingPayment'},
    {id: 11, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
    {id: 12, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'},
    {id: 13, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
    {id: 14, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
    {id: 15, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
    {id: 16, title: 'rap concert', price: 40, userId: 'user2', status: 'AwaitingPayment'},
    {id: 17, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
    {id: 18, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'},
    {id: 19, title: 'basketball game', price: 40, userId: 'user1', status: 'Created'},
    {id: 20, title: 'music festival', price: 40, userId: 'user1', status: 'Created'},
    {id: 21, title: 'rock concert', price: 40, userId: 'user1', status: 'Cancelled'},
    {id: 22, title: 'rap concert', price: 40, userId: 'user2', status: 'AwaitingPayment'},
    {id: 23, title: 'hip hop concert', price: 40, userId: 'user3', status: 'Completed'},
    {id: 24, title: 'ted talk', price: 40, userId: 'user3', status: 'Completed'}
]

/**
 * MyOrdersScreen
 * @description: Screen that renders a users order history
 * 
 */

const MyOrdersScreen = () => {
    const [orderFilter, setOrderFilter] = useState('All')
    console.log("===> :", orderFilter)
    return (
        <Screen style={styles.background}>
            <Title title="My Orders"/>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TicketWithStatus ticket={item} />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
});

export default MyOrdersScreen
