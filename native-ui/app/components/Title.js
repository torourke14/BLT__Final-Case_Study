import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import globalStyles from '../config/styles'
/**
 * Title
 * @description: Used to display the title of the page
 * 
 */
const Title = ({title}) => {
    
    return (
        <TouchableOpacity >
            <View>
                <Text style={globalStyles.titleText}>{title}</Text> 
            </View>
        </TouchableOpacity>
    )
}

export default Title

const styles = StyleSheet.create({
    
})
