import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Link } from 'expo-router'
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'
import { navigate } from 'expo-router/build/global-state/routing'
import LoginScreen from './login'

const JoinScreen = () => {
    const handlePress = () => {
        navigation.navigate(LoginScreen)
    }
    return (
        <View style={styles.container}>
            <div style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.title}>TerpNest</Text>
            </div>
            <div style={styles.background}>
                <Image style={styles.imagebckgrnd} source={umdLogo} />
            </div>
            <Text style={styles.text}>Join the Turtle Nest!</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text>Join Now!</Text>
            </TouchableOpacity>
        </View>
    );
}
export default JoinScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#800020',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto Slab',       
        color: 'white',
        marginLeft: '2%',
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: '5%',
      alignSelf: 'center',
    },
    header: {
      backgroundColor: '#C41E3A',
      maxHeight: '9%',
      maxWidth: '100%',
      flexDirection: 'horizontal',
    },
    image: {
      maxHeight: '100%',
      maxWidth: '20%',
    },
    background: {
      maxHeight: '30%',
      backgroundColor: 'black',
      maxWidth: '100%',
    },
    imagebckgrnd: {
      maxHeight: '100%',
      maxWidth: '100%',
      opacity: 0.5,
    },
    button: {
        padding: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 10,
    }
  })