import React from 'react'
import { StyleSheet, View } from 'react-native'
import Title from '../components/Title'
import Button from '../components/AppButton'
import Screen from '../components/Screen'
import useAuth from "../auth/useAuth";
const LogoutScreen = () => {
    const auth = useAuth()
    return (
        <Screen style={styles.background}>
            <Title title="Would you like to logout?"/>
            <View style={styles.buttonsContainer} >
                <Button 
                    title="Logout"
                    color="primary"
                    onPress={()=>auth.logOut()}
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
export default LogoutScreen
