import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Screen from '../components/Screen'
import Title from '../components/Title'
import Button from '../components/AppButton'
import CreditCardModal from '../components/CreditCardModal'

const PaymentScreen = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false)
    let ticket = route.params
    let title = `Purchasing ${ticket.title}`
    return (
        <Screen style={styles.background}>
            <CreditCardModal modalVisible={modalVisible} setModal={setModalVisible}/>
            <Title title={title} />
            <Text>You have 30 seconds left to order</Text>
            <View style={styles.buttonsContainer} >
                <Button 
                    title="Pay"
                    color="primary"
                    onPress={() => setModalVisible(!modalVisible)}
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

export default PaymentScreen
