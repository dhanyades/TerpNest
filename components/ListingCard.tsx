import React, {useState} from "react";
import Property from "./models/property";
import {View, Text, Image, StyleSheet, Pressable} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ListingCard: React.FC<Property> = (listing: Property) => {
    const secureImageURL = listing.image.startsWith('//') ? `https:${listing.image}` : listing.image;
    const [liked, setLiked] = useState(false);

    return(
        <View style={styles.card}>
            <Text style={styles.title}>{listing.title}</Text>
            <Image source={{ uri: secureImageURL}} style={styles.image}></Image>
            <Text style={styles.info}>{listing.address}</Text>
            <Text style={styles.rent}>Rent: {listing.price}</Text>
            <Text style={styles.info}>Rooms: {listing.beds}</Text>
            <View style={styles.like}>
                
                <Pressable onPress={() => setLiked(!liked)}>
                <MaterialCommunityIcons 
                    name={liked ? 'heart' : 'heart-outline'} 
                    size={32} 
                    color={liked ? 'red' : ''} 
                />
                </Pressable>
            </View>
            
        </View>
    );
};
export default ListingCard; 

const styles = StyleSheet.create ({
   card:{
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    width: 375,
    maxHeight: 560,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
   },
   title:{
    maxWidth: 350,
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    fontFamily: "Monaco",
    alignSelf: "center",
    fontSize: 18
   },
   image: {
    width: 300, 
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 5,
    alignSelf: "center"
},
info: {
    fontFamily: "Monaco",
    margin: 2,
},
rent: {
    fontFamily: "Monaco",
    color: "grey",
},
like: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 300
}
})