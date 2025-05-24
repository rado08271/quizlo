import {createNativeStackNavigator} from "@react-navigation/native-stack";


import React from 'react';
import HomeTabNavigation from "./HomeTabNavigation";
import EventTabsNavigation from "./EventTabsNavigation";
import QuizOrgManagentScreen from "../screens/QuizOrgManagentScreen";
import ManageMailsScreen from "../screens/ManageMailsScreen";
import CreateQuizScreen from "../screens/CreateQuizScreen";

const Stack = createNativeStackNavigator();

const ManagementNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeTabNavigation}/>
            <Stack.Screen name="Details" component={EventTabsNavigation} />
            <Stack.Screen name="ManageQuizOrgs" component={QuizOrgManagentScreen} />
            <Stack.Screen name="ManageQuizMails" component={ManageMailsScreen} />
            <Stack.Screen name="CreateQuiz" component={CreateQuizScreen} />
        </Stack.Navigator>
    );
};

export default ManagementNavigator;