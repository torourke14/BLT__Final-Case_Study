import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from "../config/colors"

/**
 * Ticket
 * @description: Used in TicketListingScreen to display each row of the tickets listed
 * 
 */
const Ticket = ({ticket}) => {
    
    return (
        <View style={styles.listing}>
            <Text style={styles.price}>${ticket.price}</Text>
            <Text style={styles.text}>{ticket.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor: colors.white,
        borderWidth: 1,
        marginTop: 5,
        padding: 10,
    },
    price: {
        flex: 1,
        width: 40,
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: 'transparent',
        backgroundColor: 'yellow',
        borderWidth: 1,
        fontSize: 16,
    },
    text: {
        backgroundColor: colors.light,
        flex: 1,
        fontSize: 18,
        margin: 10,
    }
})

export default Ticket

