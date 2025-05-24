import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React from 'react';
import {HomeScreen} from "../screens";
import EventDetailScreen from "../screens/details/EventDetailScreen";
import HomeTabNavigation from "./HomeTabNavigation";
import EventTabsNavigation from "./EventTabsNavigation";
import QuizOrgManagentScreen from "../screens/QuizOrgManagentScreen";
import ManageMailsScreen from "../screens/ManageMailsScreen";

const ManagementNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeTabNavigation}/>
            <Stack.Screen name="Details" component={EventTabsNavigation} />
            <Stack.Screen name="ManageQuizOrgs" component={QuizOrgManagentScreen} />
            <Stack.Screen name="ManageQuizMails" component={ManageMailsScreen} />
        </Stack.Navigator>
    );
};

export default ManagementNavigator;