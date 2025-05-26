import {createNativeStackNavigator} from "@react-navigation/native-stack";


import React from 'react';
import HomeTabNavigation from "./HomeTabNavigation";
import EventTabsNavigation from "./EventTabsNavigation";
import QuizOrgManagentScreen from "../screens/QuizOrgManagentScreen";
import ManageMailsScreen from "../screens/ManageMailsScreen";
import CreateQuizScreen from "../screens/CreateQuizScreen";
import ShowEventOptionsAction from "../components/ShowEventOptionsAction";

const Stack = createNativeStackNavigator();

const ManagementNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name="Home" component={HomeTabNavigation} options={{headerShown: false}}/>
            <Stack.Screen name="Details" component={EventTabsNavigation} options={{headerShown: true, headerRight: () => <ShowEventOptionsAction/>}}/>
            <Stack.Screen name="ManageQuizOrgs" component={QuizOrgManagentScreen} />
            <Stack.Screen name="ManageQuizMails" component={ManageMailsScreen} />
            <Stack.Screen name="CreateQuiz" component={CreateQuizScreen} />
        </Stack.Navigator>
    );
};

export default ManagementNavigator;