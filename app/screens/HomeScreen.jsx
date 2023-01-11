import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles, colors, container } from '../utils/data/styles'

const HomeScreen = ({navigation}) => {

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
          <View>

          <TouchableOpacity
            style={
              [appStyles.defaultButton, 
              { backgroundColor: colors.warning, color: colors.white }
            ]}
            onPress={() => navigation.push('Survey')}
            activeOpacity={1}
          >
            <Text style={[appStyles.defaultButonText, {color: colors.white }]}>
              Participer au vote
            </Text>
          </TouchableOpacity>


        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen

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