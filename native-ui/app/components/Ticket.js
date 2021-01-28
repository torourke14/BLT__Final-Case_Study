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
                             style={styles.bg}
            >
                <Text style={globalStyles.price}>${ticket.price}</Text>
                <Text style={globalStyles.text}>{ticket.title}</Text>
            </ImageBackground>
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
    },
    bg: {
        width: '100%',
        height: '100%',
        
    }
})

export default Ticket

