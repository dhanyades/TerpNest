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
        <Text>Survey</Text>
        <Text>Please fill in your preferences below:</Text>
        
        <TouchableOpacity onPress={handlePress}>
            <Text>Submit Changes</Text>
        </TouchableOpacity>

    </View>
 )   
}
export default SurveyScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '9%',
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
});