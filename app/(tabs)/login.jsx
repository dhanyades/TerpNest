import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const correctUsername = "admin";
  const correctPassword = "terps";

  const handlePress = () => {
    if (username === correctUsername && password === correctPassword){
      navigation.navigate('Survey')

    }
    else{
      window.alert("Try again!");
    }
  };
    
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.title}>TerpNest</Text>
            </View>
            <View style={styles.background}>
                <Image style={styles.imagebckgrnd} source={umdLogo} />
            </View>
            <Text style={styles.label}>Log In:</Text>
            <Text style={styles.subtitle}>Enter your username and password.</Text>
            <View style={styles.login}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
    
                <TouchableOpacity  onPress={handlePress} style={styles.button}>
                    <Text>Submit!</Text>
                </TouchableOpacity>

            </View>
      </View>
    );

    
}
export default LoginScreen;

const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#800020',
      resizeMode: 'contain'
    },
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '9%',
        maxWidth: '100%',
        flexDirection: 'row',
    },
      title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 36,
        color: "#fff",
      },
      input: {
        width: "80%",
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
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
        maxHeight: '30%',
        backgroundColor: 'black',
        maxWidth: '100%',
    },
    imagebckgrnd: {
        maxHeight: '100%',
        maxWidth: '100%',
        opacity: 0.5,
    },
      
    label: {
        fontSize: 60,
        fontWeight: "bold",
        fontFamily: 'Lucida Console',
        opacity: 0.8,
        marginLeft: 20,
      
    },
    subtitle: {
        fontSize: 18,
        color: "#fff",
        opacity: 0.7,
        marginLeft: 23,
        marginBottom: 20
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
        marginTop: '10%',
        borderRadius: 20,
        height: 40,
        width: 90,
        alignItems: 'center',
        fontWeight: 'bold'

    },
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '9%',
        maxWidth: '100%',
        flexDirection: 'row',
      },
    });