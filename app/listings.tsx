import React from "react";
import {View, Text} from "react-native";
import Property from "../components/models/property";

const ListingScreen = (properties: Property[]) => {
    return(
        <View>
            <Text>
                Listing
            </Text>
        </View>
    );
}
export default ListingScreen;