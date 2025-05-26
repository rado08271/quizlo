import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {Pressable, StyleSheet, Alert} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ShowEventOptionsAction = () => {
    const [optionsVisible, setOptionsVisible] = useState(false)

    // TODO: Add lodash to allow only every 200ms
    const toggleOptions = () => setOptionsVisible(!optionsVisible)

    return (
        <Pressable style={styles.headerAction} onPress={toggleOptions}>
            <Icon name={'ellipsis-vertical-sharp'} size={24}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    headerAction: {
        paddingHorizontal: 16
    }
})


export default ShowEventOptionsAction;
