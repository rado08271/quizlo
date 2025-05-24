import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";

const EventDetailScreen = ({route, navigation}) => {
    const { eventId } = route.params

    return (
        <View>
            <Text> { eventId } </Text>
        </View>
    );
};

export default EventDetailScreen;