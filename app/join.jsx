import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'

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
                <Text style={styles.buttonText}>Join Now!</Text>
            </TouchableOpacity>
        </View>
    );
}
export default JoinScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f5eeda',
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
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: '5%',
      alignSelf: 'center',
      fontFamily: 'Monaco',
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
        marginTop: '10%',
        borderRadius: 20,
    },
    buttonText:{
      color: "white",
      fontFamily: 'Lucida Console',
      fontWeight: 'bold',
    }

  })