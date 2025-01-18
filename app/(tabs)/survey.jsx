import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import terpLogo from '@/assets/images/turtlenestlogo.png'

const SurveyScreen = ({navigation, username: string}) => {
 return(
    <View>
        <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.title}>TerpNest</Text>
        </View>
        <Text>Survey</Text>
        <Text>Please fill in your preferences below:</Text>
        <TouchableOpacity>
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