import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import terpLogo from '@/assets/images/turtlenestlogo.png'
import umdLogo from '@/assets/images/umd-bckgrnd.webp'

const index = () => {
  return (
    <View style={styles.container}>
      <div style={styles.header}>
        <Image style={styles.image} source={terpLogo} /> 
      </div>
      {/* <div style={styles.background}>
        <Image style={styles.imagebckgrnd} source={umdLogo} />
      </div>  */}
      <h1 style={styles.text}>Home Screen</h1>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffcccb',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkStyle: {
    marginTop: 20,
    padding: 15,
    color: '#',
    fontSize: 20,
  },
  header: {
    backgroundColor: 'white',
    maxHeight: '9%',
    maxWidth: '100%',
    alignItems: 'center',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '20%',
  },
  background: {
    maxHeight: '30%',
    maxWidth: '50%',
    backgroundColor: 'white',
  },
  imagebckgrnd: {
    
  },
})