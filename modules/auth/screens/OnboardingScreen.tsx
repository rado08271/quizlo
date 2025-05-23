import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";
import icon from '../../../assets/icon.png'
import FloatingButton from "../../../core/components/buttons/FloatingButton";
import {SafeAreaView} from "react-native-safe-area-context";
import FilledButton from "../../../core/components/buttons/FilledButton";
import {useNavigation} from "@react-navigation/native";
import styles from "./stylesheet";

const OnboardingScreen = () => {
    const nav = useNavigation();

    const navigateToLogin = () => nav.navigate('Login')
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} alt='welcome screen image with person holding trophy' src={'https://lh3.googleusercontent.com/aida-public/AB6AXuBGBJYtsWxANl2i7H9mJX4s3EMUIDPqS_O752kgFdWtsRVIrLqVwA9UVcFcfuoNJj6g2wdmT4WOhP0Yuu6aa8RN2i2hotdqfgNP2kYoP05RrBhi7gaKADqAVG7Xg_LXs-roAD6R1BWtdWdlDOy0jzN_js6rIQgKSt-h-III9K2M-SRM3_R7C81XWHtrxCQfXeWCDVz07OM1FIfgvrt4L6qMAcXJRa-YawiybJ5cHho5RUoIEUZxxQNYy0PhGq_GBj5NOZabVWZIZCHm'}/>
            <View style={styles.textContainer}>
                <Text style={styles.header}>Welcome to Quizlo</Text>
                <Text style={styles.text}>Create engaging quizzes, manage participants, and track performance in real-time. Let's get started!</Text>
            </View>
            <FilledButton style={styles.primaryButton} onPress={navigateToLogin}>Get Started</FilledButton>
        </SafeAreaView>
    );
};


export default OnboardingScreen;