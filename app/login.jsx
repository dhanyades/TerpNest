import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'
import userIcon from '@/assets/images/usericon.png'

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const correctUsername = "admin";
  const correctPassword = "terps";

  const handlePress = () => {
    if (username === correctUsername && password === correctPassword){
      navigation.navigate('Listings')

    }
    else{
      window.alert("Try again!");
    }
  };
    
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.headerTitle}>TerpNest</Text>
            </View>
            <View style={styles.background}>
                <Image style={styles.imagebckgrnd} source={umdLogo} />
            </View>
            <Text style={styles.label}>Log In:</Text>
            <Text style={styles.subtitle}>Enter your username and password.</Text>
            <View style={styles.profile}>
              <Image style={{width:100, height:100}} source={userIcon} />
            </View>
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
                    <Text style={styles.buttonText}>Submit!</Text>
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
      backgroundColor: '#f3e7e7',
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
    profile:{
        maxWidth: 100,
        maxHeight: 100,
        alignSelf: 'center'
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
        fontFamily: 'Lucida Console',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: "black",
        opacity: 0.8,
        marginLeft: 23,
        marginBottom: 20,
        fontFamily: 'Lucida Console',
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
      backgroundColor: '#C41E3A',
      alignSelf: 'center',
      marginTop: '3%',
      marginBottom: '3%',
      borderRadius: 20,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
      fontFamily: 'Lucida Console',
      fontWeight: 'bold',
  },
    });