import React from 'react';
import AuthNavigator from "../../modules/auth/navigation/AuthNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import ManagementNavigator from "../../modules/management/navigation/ManagementNavigator";


const AppNavigator = () => {
    const { isAuthorized } = { isAuthorized: false }

    return (
        <NavigationContainer>
            {isAuthorized
                ? <AuthNavigator/>
                : <ManagementNavigator/>
            }
        </NavigationContainer>
    );
};

export default AppNavigator;