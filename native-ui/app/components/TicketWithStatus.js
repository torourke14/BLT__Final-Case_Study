import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'
import globalStyles from "../config/styles"

/**
 * Ticket
 * @description: Used in MyOrdersScreen to display each row of the tickets ordered along 
 *               with its status.
 */
const Ticket = ({ticket}) => {
    let status;
    if (ticket.status === "Created") {
        status = [globalStyles.status, globalStyles.success]
    } else if (ticket.status === "AwaitingPayment") {
        status = [globalStyles.status, globalStyles.pending]
    } else if (ticket.status === "Cancelled") {
        status = [globalStyles.status, globalStyles.cancelled]
    } else if (ticket.status === "Completed") {
        status = [globalStyles.status, globalStyles.completed]
    }
    
    return (
        <View style={globalStyles.listing}>
            <Text style={globalStyles.price}>${ticket.price}</Text>
            <Text style={status}>{ticket.status}</Text>
            <Text style={globalStyles.text}>{ticket.title}</Text>
        </View>
    )
}

export default Ticket

