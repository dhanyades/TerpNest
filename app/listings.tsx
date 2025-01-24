import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import ListingCard from "@/components/ListingCard";
import Property from "@/components/models/property";
import terpLogo from '@/assets/images/turtlenestlogo.png';
import { useNavigation } from '@react-navigation/native';

const ListingScreen = () => {
    const navigation = useNavigation<any>();
    const [index, setIndex] = useState(0);
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/properties')
            .then(response => response.json())
            .then(data => {
                console.log("in fetch", {data});

                // Ensure data is in the expected format and map it
                const formattedProperties = data.data.map((item: any): Property => ({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    address: item.address,
                    price: item.price,
                    beds: item.beds
                }));
                setProperties(formattedProperties);
                console.log({formattedProperties});
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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

    const handleMenu = () => {
        navigation.navigate('Menu');
    }

    const isFirst = index === 0;
    const isLast = index === properties.length - 1;

    return(
         <View style={styles.main}>
            <View style={styles.header}>
                <Image style={styles.image} source={terpLogo} /> 
                <Text style={styles.headerTitle}>TerpNest</Text>
                <TouchableOpacity onPress={handleMenu} style={styles.button}>
                    <View style={styles.line} />
                    <View style={styles.line} />
                    <View style={styles.line} />
                </TouchableOpacity>
            </View>
            <Text style={styles.topText}>Available Listings:</Text>
            <View style={styles.card}>
            {properties.length > 0 && (
                    <ListingCard 
                        id={properties[index].id}
                        title={properties[index].title}
                        address={properties[index].address}
                        price={properties[index].price}
                        beds={properties[index].beds}
                        image={properties[index].image}
                    />
                )}
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
        backgroundColor: '#f3e7e7',
    },
    topText: {
        fontSize: 20,
        fontFamily: "Monaco",
        fontWeight: "bold",
        marginTop: 35,
        alignSelf: "flex-start",
        marginLeft: 25
    },
    header: {
        backgroundColor: '#C41E3A',
        maxHeight: '9%',
        maxWidth: '100%',
        flexDirection: 'row',
    },
    button: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 145,
      },
      line: {
        width: 25,
        height: 2,
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 2,
        margin: 5,
      },
      title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      card: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 10,

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
        position: "absolute",
        marginTop: 700

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