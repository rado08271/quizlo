import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import styles from "./stylesheet";
import FilledButton from "../../../core/components/buttons/FilledButton";
import {SafeAreaView} from "react-native-safe-area-context";
import FilledInput from "../../../core/components/inputs/FilledInput";

const CheckEmailScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>Check your email account</Text>
                <Image src={""} alt={"Email placeholder image box to emphasize availability on emails"}/>
                <Text style={styles.text}>Now please check your mailbox associated with your account</Text>
            </View>
        </SafeAreaView>
    );
};

export default CheckEmailScreen;