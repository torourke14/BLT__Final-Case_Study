import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import colors from "../config/colors"
import globalStyles from "../config/styles"

/**
 * Ticket
 * @description: Used in TicketListingScreen to display each row of the tickets listed
 * 
 */
const Ticket = ({ticket}) => {
    
    return (
        
        <View style={globalStyles.listing}>
            <ImageBackground source={require('../assets/ticket.png')}
                             style={globalStyles.bg}
            >
                <Text style={globalStyles.price}>${ticket.price}</Text>
                <Text style={globalStyles.ticketText}>{ticket.title}</Text>
            </ImageBackground>
        </View>
    )
}

export default Ticket

