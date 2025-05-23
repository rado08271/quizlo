import React from 'react';
import {CheckEmailScreen, LoginScreen, OnboardingScreen, RegisterScreen, ResetPasswordScreen} from "../screens";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true, headerTitle: "Log In"}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true, headerTitle: "Sign Up"}}/>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: true, headerTitle: ""}}/>
            <Stack.Screen name="CheckEmail" component={CheckEmailScreen} options={{headerShown: true, headerTitle: ""}}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;