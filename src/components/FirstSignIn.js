import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { COLOR } from '../contants/themes'
import { BUTTON } from '../contants/themes'


const FirstSignIn = () => {
    const text = 'Sign up'
    return (
        <View style={styles.container}>
            <View style={styles.topLayout}>
                <Image source={require('../Imgs/Logo.png')} style={{
                    width: 120,
                    height: 140,
                }} />
            </View>
            <View style={styles.bottomLayout}>
                <View style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 50,
                }}>

                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                    }}>Sign up for free music</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                    }}> on your phone</Text>
                    <BUTTON text={text} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: COLOR.width,
        marginTop: '10%',
        backgroundColor: COLOR.primary,
    },
    topLayout: {
        flex: 1.75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomLayout: {
        flex: 3,
        backgroundColor: COLOR.secondary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
})

export default FirstSignIn