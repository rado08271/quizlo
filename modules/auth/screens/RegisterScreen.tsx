import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import styles from "./stylesheet";
import FilledButton from "../../../core/components/buttons/FilledButton";
import {SafeAreaView} from "react-native-safe-area-context";
import FilledInput from "../../../core/components/inputs/FilledInput";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const { navigate } = useNavigation()

    const navigateToLogin = () => navigate("Login")
    const navigateToCheckEmail = () => navigate("CheckEmail")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <FilledInput style={styles.inputText} placeholder={"Email"} id={"email"} onValueChange={input => {
                    console.log("email rhas changed", input)
                }}/>
                <FilledInput style={styles.inputText} placeholder={"Password"} id={"password"} onValueChange={input => {
                    console.log("password has changed", input)
                }}/>
                <FilledButton style={styles.primaryButton} onPress={navigateToCheckEmail}>Create Account</FilledButton>
            </View>
            <Pressable onPress={navigateToLogin}>
                <Text style={styles.underlinedText}>Already have an account? Log in!</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default RegisterScreen;