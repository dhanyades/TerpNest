import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'

const JoinScreen = ( {navigation} ) => {
    const handlePressLog = () => {
        navigation.navigate('Login');
    }
    const handlePress = () => {
      navigation.navigate('Sign-Up')
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
            <Text style={styles.text}>Join the Terp Family!</Text>
            <Text style={styles.subtext}>Find your nest.</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.text}>OR</Text>
            <TouchableOpacity style={styles.button} onPress={handlePressLog}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
}
export default JoinScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f3e7e7',
      resizeMode: 'contain',
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
      color: 'black',
      fontSize: 38,
      fontWeight: 'bold',
      marginTop: '3%',
      marginBottom: '3%',
      alignSelf: 'center',
      fontFamily: 'Lucida Console',
    },
    subtext: {
      color: 'black',
      fontSize: 25,
      marginTop: '2%',
      marginBottom: '3%',
      alignSelf: 'center',
      opacity: 0.8,
      fontFamily: 'Lucida Console',
    },
    header: {
      backgroundColor: '#C41E3A',
      maxHeight: '9%',
      maxWidth: '100%',
      flexDirection: 'row',
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow direction and distance
      shadowOpacity: 0.25, // Shadow opacity
      shadowRadius: 3.84, // Shadow blur radius
      elevation: 5, // Android elevation
    },
    background: {
      maxHeight: '30%',
      backgroundColor: 'black',
      maxWidth: '100%',
    },
    imagebckgrnd: {
      maxHeight: '100%',
      maxWidth: '100%',
      opacity: 0.4,
      
    },
    button: {
        padding: 10,
        backgroundColor: '#C41E3A',
        alignSelf: 'center',
        marginTop: '3%',
        marginBottom: '3%',
        borderRadius: 20,
    },
    buttonText:{
      color: "white",
      fontSize: 26,
      fontFamily: 'Lucida Console',
      fontWeight: 'bold',
    }

  })