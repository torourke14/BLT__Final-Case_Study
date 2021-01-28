import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

/**
 * Ticket
 * @description: Used in MyOrdersScreen to display each row of the tickets ordered along 
 *               with its status.
 */
const Ticket = ({ticket}) => {
    
    return (
        <View style={styles.listing}>
            <Text style={styles.text}>{ticket.title} - ${ticket.price} - Status: {ticket.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    text: {
        flex: 1,
    }
})

export default Ticket

