import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import styles from "./stylesheet";
import FilledButton from "../../../core/components/buttons/FilledButton";
import {SafeAreaView} from "react-native-safe-area-context";
import OutlinedInput from "../../../core/components/inputs/OutlinedInput";
import FilledInput from "../../../core/components/inputs/FilledInput";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {
    const { navigate } = useNavigation();

    const navigateToRegister = () => navigate("Register")
    const navigateToLostPassword = () => navigate("ResetPassword")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <FilledInput style={styles.inputText} placeholder={"Email"} id={"email"} onValueChange={input => {
                    console.log("email rhas changed", input)
                }}/>
                <FilledInput style={styles.inputText} placeholder={"Password"} id={"password"} onValueChange={input => {
                    console.log("password has changed", input)
                }}/>
                <Pressable onPress={navigateToLostPassword}>
                    <Text style={styles.underlinedText}>Forgot password?</Text>
                </Pressable>
                <FilledButton style={styles.primaryButton} onPress={() => console.log("Login")}>Login</FilledButton>
            </View>
            <Pressable onPress={navigateToRegister}>
                <Text style={styles.underlinedText}>Don't have an account yet? Create one</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default LoginScreen;