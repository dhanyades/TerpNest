import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Property from "../components/models/property";
import ListingCard from "@/components/ListingCard";
import listing from "../listings.json";
import terpLogo from '@/assets/images/turtlenestlogo.png'

const ListingScreen = () => {
    const [index, setIndex] = useState(0);
    const jsonData: any[] = listing;

    const properties: Property[] = listing;

    const handlePrev = () => {
        if (index > 0) {  // Ensure index does not go below 0
            setIndex(index - 1);
        }
    }

    const handleNext = () => {
        if (index < properties.length - 1) { 
            setIndex(index + 1);
        }
    }

    const isFirst = index === 0;
    const isLast = index === properties.length - 1;

    return(
         <View style={styles.main}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.headerTitle}>TerpNest</Text>
            </View>
            <Text style={styles.topText}>Listings Below:</Text>
            <View style={styles.card}>
                <ListingCard 
                    title={properties[index].title}
                    address={properties[index].address}
                    price={properties[index].price}
                    beds={properties[index].beds}
                    image={properties[index].image}
                />
            </View>
            
            <View style={styles.buttons}>
                <TouchableOpacity disabled={isFirst} onPress={handlePrev} style={styles.prev}>
                    <Text>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={isLast} onPress={handleNext} style={styles.next}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}
export default ListingScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
    },
    topText: {
        fontSize: 30,
        fontFamily: "Monaco",
        marginTop: 15,
        alignSelf: "flex-start",
        marginLeft: 25
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
      card: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 50,

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
    buttons: {
        flexDirection: "row",
    },
    prev: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
    next: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    }

});