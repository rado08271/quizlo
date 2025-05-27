import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {Pressable, StyleSheet, Alert, Platform, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {BLUE_COLOR_50} from "../../../core/styles/colors";

const ShowEventOptionsAction = () => {
    const [optionsVisible, setOptionsVisible] = useState(false)

    // TODO: Add lodash to allow only every 200ms
    const toggleOptions = () => setOptionsVisible(!optionsVisible)

    return (
        <Pressable android_ripple={{color: BLUE_COLOR_50, radius: 16}} style={styles.headerAction} onPress={toggleOptions}>
            <Icon name={'ellipsis-vertical-sharp'} size={24}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    headerAction: {
        paddingHorizontal: 16
    },
})


export default ShowEventOptionsAction;
