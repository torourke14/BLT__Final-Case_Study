import React from 'react'
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native'
import Button from '../components/AppButton'
import Screen from '../components/Screen'
import routes from '../navigation/routes'

const WelcomeScreen = ({ navigation }) => {
    return (
        <Screen style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode={'cover'} source={require("../assets/logo.png")} />
                <Text style={styles.tagline}>Buy and Sell Tickets</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login/Register"
                    color="primary"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <>{/*
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />*/ }</>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    buttonsContainer: {
      padding: 20,
      width: "100%",
    },
    logo: {
      width: '100%',
      height: 150,
    },
    logoContainer: {
      position: "absolute",
      top: 70,
      alignItems: "center",
    },
    tagline: {
      fontSize: 25,
      fontWeight: "600",
      paddingVertical: 20,
    },
});
  
export default WelcomeScreen;