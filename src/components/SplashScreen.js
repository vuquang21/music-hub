import React, { Image, View } from 'react-native';


export default function SplashScreen() {

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: '#FFA31A'
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Image source={require('../Imgs/Logo.png')} style={{
                    width: 120,
                    height: 140,
                    marginBottom: 20,
                }} />
            </View>
        </View>
    )
}