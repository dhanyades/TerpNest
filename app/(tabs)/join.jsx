import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'
import { navigate } from 'expo-router/build/global-state/routing'

const JoinScreen = ( {navigation} ) => {
    const handlePress = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.title}>TerpNest</Text>
            </View>
            <View style={styles.background}>
                <Image style={styles.imagebckgrnd} source={umdLogo} />
            </View>
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
      resizeMode: 'contain'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Monaco',       
        color: 'white',
        opacity: 0.8,
        alignSelf: 'center', 
        marginLeft: '-5%',
    },
    image: {
        maxHeight: '100%',
        maxWidth: '24%',
        resizeMode: 'contain'
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: '5%',
      alignSelf: 'center',
      fontFamily: 'Monaco'
    },
    header: {
      backgroundColor: '#C41E3A',
      maxHeight: '9%',
      maxWidth: '100%',
      flexDirection: 'row',
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