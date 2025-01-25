import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from "react-native";
import terpLogo from '@/assets/images/turtlenestlogo.png';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const SurveyScreen = () => {
    const navigation = useNavigation<any>();

    const [diet, setDiet] = useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    { label: 'Messy', value: 'option1' },
    { label: 'Neat', value: 'option2' },
    { label: 'Average', value: 'option4' },
  ]);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
    { label: 'Yes', value: 'option1' },
    { label: 'No', value: 'option2' },
  ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
    { label: 'Extroverted', value: 'option1' },
    { label: 'Introverted', value: 'option2' },
  ]);

    const handlePress = () => {
        
        navigation.navigate('Listings');
    }
 
 
    return(
        <View style={styles.main}>
            <View style={styles.header}>
                    <Image style={styles.image} source={terpLogo} /> 
                    <Text style={styles.title}>TerpNest</Text>
            </View>
            <View >
                <Text style={styles.label}>Please fill in your preferences below:</Text>
                <View style={styles.line}></View>
                <Text style={styles.subtitle}>I am a morning person.</Text>
                <DropDownPicker style={styles.picker}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    placeholder="Select an option"
                />
                
                <Text style={styles.subtitle}>Socially, I am best described as:</Text>
                <DropDownPicker style={styles.picker}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="Select an option"
                />
                <Text style={styles.subtitle}>In terms of cleanliness, people consider me to be:</Text>
                <DropDownPicker style={styles.picker}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select an option"
                />
                <Text style={styles.subtitle}>Any dietary restrictions or allergies you wish to disclose:</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your dietary preferences"
                value={diet}
                onChangeText={setDiet}
                />
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Submit Changes</Text>
                </TouchableOpacity>
            </View>
           
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
    main: {
        backgroundColor: '#f3e7e7',
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginBottom: 20,
        marginTop: 5

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lucida Console',
        marginLeft: 20, 
        marginTop: 10
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
        marginBottom: 30,
    },
    button: {
        padding: 10,
        backgroundColor: '#C41E3A',
        marginTop: '7%',
        borderRadius: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontFamily: 'Lucida Console',
        fontWeight: 'bold',
    },
    picker: {
        marginBottom: 30,
        borderWidth: 4,
        width: "80%",
        alignSelf: 'center'
    },
    input: {
        width: "80%",
        height: 50,
        borderWidth: 4,
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: "#fff",
    },
});