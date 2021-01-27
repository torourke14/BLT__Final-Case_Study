import React from 'react'
import {View, Text, Button} from 'react-native'
import Title from '../components/Title'
import Screen from '../components/Screen'
const TicketDetailScreen = ({route}) => {
    const ticket = route.params

    return (
        <Screen>
            <Title title={ticket.title}/>
            <Text>Price - ${ticket.price}</Text>
            <Text>Status - Available</Text>
            <Button 
                title="Purchase"
                color="#841584"
            />
        </Screen>
    )
}

export default TicketDetailScreen
