import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

/**
 * Ticket
 * @description: Used in TicketListingScreen to display each row of the tickets listed
 * 
 */
const Ticket = ({ticket}) => {

    return (
        <View style={styles.listing}>
            <Text style={styles.text}>{ticket.title} - ${ticket.price}</Text>
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

