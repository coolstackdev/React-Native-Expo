import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, ImageBackground, View, Image, Text } from 'react-native';

function WelcomeScreen({ navigation }) {
  
  const handleClick = () => {
    navigation.navigate('Image View')
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <TouchableWithoutFeedback onPress={handleClick}>
          <Image style={styles.logo} source={require("../assets/favicon.png")} />
        </TouchableWithoutFeedback>
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20
  }
})

export default WelcomeScreen;