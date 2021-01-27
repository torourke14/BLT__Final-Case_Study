import React from 'react'
import {FlatList, View} from 'react-native'
import Title from '../components/Title'
import Screen from '../components/Screen'
import Ticket from '../components/Ticket'
import { TouchableOpacity } from 'react-native-gesture-handler'
import routes from '../navigation/routes'

const data = [
    {id: 1, title: 'basketball game', price: 40, userId: 'user1'},
    {id: 2, title: 'music festival', price: 40, userId: 'user1'},
    {id: 3, title: 'rock concert', price: 40, userId: 'user1'},
    {id: 4, title: 'rap concert', price: 40, userId: 'user2'},
    {id: 5, title: 'hip hop concert', price: 40, userId: 'user3'},
    {id: 6, title: 'ted talk', price: 40, userId: 'user3'}
]
/**
 * TicketListingScreen
 * @description: Lists all tickets to the screen
 * 
 */
const TicketListingScreen = ({navigation}) => {
    return (
        <Screen>
            <Title title="Tickets For Sale" />
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(routes.TICKET_DETAILS)}
                        >
                            <Ticket ticket={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Screen>
    )
}

export default TicketListingScreen
