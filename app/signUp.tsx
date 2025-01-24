import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = ({}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setName] = useState("");
    const [gender, setGender] = useState("");
    const [semester, setSemester] = useState("");
    const navigation = useNavigation<any>();

    const handlePress = () => {
        navigation.navigate('Survey');
    }
    
    
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.headerTitle}>TerpNest</Text>
            </View>
            <View style={styles.background}>
                <Image style={styles.imagebckgrnd} source={umdLogo} />
            </View>
            <Text style={styles.label}>Sign-Up Here:</Text>
            <View style={styles.login}>
                <Text>First and Last Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    value={fullName}
                    onChangeText={setName}
                />
                <Text>Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Text>Please Enter Your Gender Identity:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter gender"
                    value={gender}
                    onChangeText={setGender}
                />
                <Text>Intended Semester for Housing:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter semester"
                    value={semester}
                    onChangeText={setSemester}
                    secureTextEntry={true}
                />
                <TouchableOpacity  onPress={handlePress} style={styles.button}>
                    <Text>Submit!</Text>
                </TouchableOpacity>

            </View>
      </View>
    );

    
}
export default SignUpScreen;

const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f3e7e7',
      resizeMode: 'contain'
    },
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '9%',
        maxWidth: '100%',
        flexDirection: 'row',
    },
      headerTitle: {
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
    background: {
        maxHeight: '25%',
        backgroundColor: 'black',
        maxWidth: '100%',
    },
    imagebckgrnd: {
        maxHeight: '100%',
        maxWidth: '100%',
        opacity: 0.5,
    },
    label: {
        fontSize: 25,
        fontFamily: 'Lucida Console',
        opacity: 0.8,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    login: {
        alignItems: 'center',
    },
    input: {
        width: "70%",
        height: 40,
        marginVertical: 10,
        borderWidth: 4,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    button: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: '5%',
        borderRadius: 20,
        height: 40,
        width: 90,
        alignItems: 'center',
        fontWeight: 'bold'

    },
    
    });