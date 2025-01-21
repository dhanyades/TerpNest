import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import terpLogo from '@/assets/images/turtlenestlogo.png';
import { useNavigation } from '@react-navigation/native';
import Profile from "../components/models/profile";
import listing from "../listings.json";
import Property from "../components/models/property";

const SurveyScreen = () => {
    const navigation = useNavigation<any>();

    const handlePress = () => {
        const jsonData: any[] = listing;

        // Map over the fetched data to create a typed array of Property
        const properties: Property[] = listing;
        console.log(properties)
        navigation.navigate('Listings', { properties });
    }
 
 
    return(
        <View>
            <View style={styles.header}>
                    <Image style={styles.image} source={terpLogo} /> 
                    <Text style={styles.title}>TerpNest</Text>
            </View>
            <View>
                <Text style={styles.label}>Survey</Text>
                <Text style={styles.sublabel}>Please fill in your preferences below:</Text>
                <View style={styles.line}></View>
                <Text style={styles.subtitle}>In terms of cleanliness, people consider me to be:</Text>
                <Text style={styles.subtitle}>I am a morning person.</Text>
                <Text style={styles.subtitle}>It would bother me to live with someone who smokes/vapes.</Text>
                <Text style={styles.subtitle}>Socially, I am best described as:</Text>
                <Text style={styles.subtitle}>Any dietary restrictions or allergies you wish to disclose:</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Submit Changes</Text>
            </TouchableOpacity>
        </View>
     )      
}
export default SurveyScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '4.75%',
        maxWidth: '100%',
        flexDirection: 'row',
    },
    image: {
        maxHeight: '100%',
        maxWidth: '24%',
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
    line: {
        height: 1,
        backgroundColor: 'black',
        marginBottom: 20,
    },
    label: {
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'Lucida Console',
        marginLeft: 20, 
    },
    sublabel: {
        fontSize: 22,
        fontWeight: 'medium',
        fontFamily: 'Lucida Console',
        marginLeft: 20,
        marginBottom: 5, 
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Lucida Console',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 60,
    },
    button: {
        padding: 10,
        backgroundColor: 'gray',
        marginTop: '10%',
        marginBottom: '10%',
        borderRadius: 20,
        height: 40,
        width: 140,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 15,
        alignSelf: 'center',
    },
});