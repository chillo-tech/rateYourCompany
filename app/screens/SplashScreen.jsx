import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyles } from '../utils/data/styles'

const SplashScreen = ({ navigation }) => {

    return (
        <ImageBackground
            source={require("../../assets/images/home-bg.jpeg")}
            resizeMode="cover"
            style={styles.image}
        >
            <SafeAreaView style={[styles.container]}>
                <View style={styles.header}>
                    <Text style={[appStyles.logoText]}>RATE YOUR COMPANY</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    header: {
        marginBottom: 300
    },
    innerContainer: {
        alignItems: 'center'
    }
})