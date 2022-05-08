import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { COLOR } from '../contants/themes'

export const BUTTON = ({ text }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={{
                color: 'white',
                fontSize: 18
            }}>
                {text}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 0.05,
        width: COLOR.width - 80,
        backgroundColor: COLOR.primary,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    }
})
