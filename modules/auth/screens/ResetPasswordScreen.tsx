import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import styles from "./stylesheet";
import FilledButton from "../../../core/components/buttons/FilledButton";
import {SafeAreaView} from "react-native-safe-area-context";
import FilledInput from "../../../core/components/inputs/FilledInput";
import {useNavigation} from "@react-navigation/native";

const ResetPasswordScreen = () => {
    const { navigate } = useNavigation()

    const navigateToCheckEmail = () => navigate("CheckEmail")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.header}>Forgot your password?</Text>
                <Text style={styles.text}>Enter your email that is associated with your account to continue.</Text>
                <FilledInput style={styles.inputText} placeholder={"Email"} id={"email"} onValueChange={input => {
                    console.log("email rhas changed", input)
                }}/>
                <FilledButton style={styles.primaryButton} onPress={navigateToCheckEmail}>Reset Password</FilledButton>
            </View>
        </SafeAreaView>
    );
};

export default ResetPasswordScreen;