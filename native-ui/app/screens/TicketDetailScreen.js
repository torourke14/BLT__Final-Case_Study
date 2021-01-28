import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Title from '../components/Title'
import Screen from '../components/Screen'
import Button from '../components/AppButton'

const TicketDetailScreen = ({route}) => {
    const ticket = route.params

    return (
        <Screen style={styles.background}>
            <Title title={ticket.title}/>
            <Text>Price - ${ticket.price}</Text>
            <Text>Status - Available</Text>
            <View style={styles.buttonsContainer} >
                <Button 
                    title="Purchase"
                    color="primary"
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
});

export default TicketDetailScreen
