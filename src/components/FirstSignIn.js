import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { COLOR } from '../contants/themes'


// const Button = () => {
//     return (
//         <TouchableOpacity style={styles.button}>
//             <Text style={{
//                 color: 'white',
//                 fontSize: 18
//             }}>
//                 Sign in
//             </Text>
//         </TouchableOpacity >
//     )
// }



const FirstSignIn = () => {
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
                    flex: 0.18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 50,
                }}>

                    <Text style={{
                        color: 'white',
                        fontSize: 28,
                    }}>Sign up for free music</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 28,
                    }}> on your phone</Text>
                </View>
                {/* end element 1 */}
                <TouchableOpacity style={styles.button}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>
                        Sign up
                    </Text>
                </TouchableOpacity >
                <View style={{
                    width: '80%',
                    height: 1,
                    backgroundColor: 'white',
                    marginVertical: 30,
                    alignSelf: 'center',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 40
                }}>
                    <Text style={{
                        position: 'absolute',
                        color: 'white',
                        marginTop: -10,
                        fontSize: 22,
                        alignSelf: 'center',
                        backgroundColor: COLOR.secondary,
                        paddingHorizontal: 20
                    }}>Or</Text>
                </View>
                {/* end element 2 */}
                <View style={{
                    flex: 1,
                    // backgroundColor: 'red'
                }}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <View style={styles.btnLogin}>
                            <Image source={require('../Imgs/Usericon.png')} />
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                marginHorizontal: 20
                            }}>
                                Continue with your accout
                            </Text>
                        </View >
                    </TouchableOpacity>
                    {/* end button account */}
                    <TouchableOpacity style={styles.btnContainer}>
                        <View style={styles.btnLogin}>
                            <Image source={require('../Imgs/google.png')} />
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                marginHorizontal: 35
                            }}>
                                Continue with Google
                            </Text>
                        </View >
                        {/* end button google */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <View style={styles.btnLogin}>
                            <Image source={require('../Imgs/facebook.png')} />
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                marginHorizontal: 20
                            }}>
                                Continue with Facebook
                            </Text>
                        </View >
                    </TouchableOpacity>
                    {/* end button facebook */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: COLOR.width,
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
    },
    button: {
        flex: 0.14,
        width: COLOR.width - 80,
        backgroundColor: COLOR.primary,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 0.2,
        backgroundColor: 'black',
        marginVertical: 20,
        width: COLOR.width - 80,
        alignSelf: 'center',
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'white',
    },
    btnLogin: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    }

})

export default FirstSignIn