import React from "react";
import {View, Text} from "react-native";

const SurveyScreen = () => {
 return(
    <View>
        <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.title}>TerpNest</Text>
            </View>
        <Text>Survey!</Text>
    </View>
 )   
}
export default SurveyScreen;