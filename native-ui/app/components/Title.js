import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Title = ({title}) => {
    
    return (
        <TouchableOpacity >
            <View>
                <Text>{title}</Text> 
            </View>
        </TouchableOpacity>
    )
}

export default Title

const styles = StyleSheet.create({
    
})
