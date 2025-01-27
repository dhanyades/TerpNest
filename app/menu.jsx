import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react';
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'

const MenuScreen = ({navigation} ) => {
    const handlePressLog = () => {
        navigation.navigate('Login');
    }
    const handlePress = () => {
      navigation.navigate('Survey')
    }
    const handlePressList = () => {
        navigation.navigate('Listings')
      }
      const handlePressSign = () => {
        navigation.navigate('Sign-Up')
      }
      return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.title}>TerpNest</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Update Preferences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePressList}>
                <Text style={styles.buttonText}>Listings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePressSign}>
                <Text style={styles.buttonText}>Edit Account Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePressLog}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );

} 

export default MenuScreen

const styles = StyleSheet.create({
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