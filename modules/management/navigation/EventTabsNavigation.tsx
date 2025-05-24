import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import EventDetailScreen from "../screens/details/EventDetailScreen";
import ParticipantsListScreen from "../screens/details/ParticipantsListScreen";
import ScoreboardScreen from "../screens/details/ScoreboardScreen";
import SendMailsScreen from "../screens/details/SendMailsScreen";


const Tab = createBottomTabNavigator();
const EventTabsNavigation = ({route}) => {
    return (
        <Tab.Navigator initia>
            <Tab.Screen name="EventDetail" component={EventDetailScreen}/>
            <Tab.Screen name="ParticipantsList" component={ParticipantsListScreen} />
            <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
            <Tab.Screen name="SendMails" component={SendMailsScreen} />
        </Tab.Navigator>
    );
};

export default EventTabsNavigation;