import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React from 'react';
import EventDetailScreen from "../screens/details/EventDetailScreen";
import ParticipantsListScreen from "../screens/details/ParticipantsListScreen";
import ParticipantsWaitListScreen from "../screens/details/ParticipantsWaitListScreen";

const Tab = createMaterialTopTabNavigator()

const ParticipantsTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ParticipantsList" component={ParticipantsListScreen} options={{title: "Teams"}}/>
            <Tab.Screen name="ParticipantsWaitList" component={ParticipantsWaitListScreen} options={{title: "Wait list"}}/>
        </Tab.Navigator>
    );
};

export default ParticipantsTabNavigation;