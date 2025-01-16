import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from "react-native";
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
                <Text style={styles.headerTitle}>TerpNest</Text>
            </View>
            <Text style={styles.title}>Log In:</Text>
            <Text style={styles.subtitle}>Enter your username and password.</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
            /><TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
  
          <Button title="Submit!" onPress={handlePress} />
        
      </View>
    );

    
}
export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        maxWidth: 960,
        marginHorizontal: "auto",
        backgroundColor: '#b91d00'
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
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '9%',
        maxWidth: '100%',
        flexDirection: 'row',
      },
    });