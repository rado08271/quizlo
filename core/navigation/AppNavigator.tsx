import React from 'react';
import AuthNavigator from "../../modules/auth/navigation/AuthNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";


const AppNavigator = () => {
    const { isAuthorized } = { isAuthorized: false }

    return (
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    );
};

export default AppNavigator;