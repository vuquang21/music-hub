import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../contants/themes'

const Intro1 = ({ image, title, text }) => {

    return (
        <View style={styles.container}>
            <View style={styles.layoutTop}>
                <Image style={styles.banner} source={image} />
            </View>

            <View style={styles.layoutBottom}>
                <View style={styles.backgroundLogo}>
                    <Image style={styles.logo} source={require('../Imgs/Logo2.png')} />
                </View>

                <View style={{
                    flex: 1,
                    marginTop: 20,
                    justifyContent: 'space-around',
                    width: 400,
                }}>
                    <View style={styles.info}>
                        <Text style={styles.headline}>{title}</Text>
                        <Text style={{ color: 'gray', fontSize: 20, textAlign: 'center', marginTop: 10 }}>{text}</Text>
                    </View>
                    <View style={styles.other}>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFA31A',
        alignItems: 'center',
    },
    banner: {
        marginVertical: 30,
        height: 600,
        width: 500,
        marginHorizontal: 10
    },
    layoutTop: {
        flex: 2,
        backgroundColor: '#FFA31A',
        resizeMode: 'contain'
    },
    layoutBottom: {
        flex: 1.5,
        backgroundColor: '#181818',
        position: 'relative',
        borderTopRightRadius: 30,
        borderTopStartRadius: 30,
        width: COLOR.width,
        alignItems: 'center',

    },
    logo: {
        width: 120,
        height: 120,
        marginTop: -50
    },
    processBar: {
        width: 120,
        height: 10
    },
    headline: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    },
    other: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    info: {
        justifyContent: 'space-around',
        marginTop: 50
    }

})

export default Intro1