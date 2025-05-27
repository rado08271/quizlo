import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import EventDetailScreen from "../screens/details/EventDetailScreen";
import ParticipantsListScreen from "../screens/details/ParticipantsListScreen";
import ScoreboardScreen from "../screens/details/ScoreboardScreen";
import CommunicationScreen from "../screens/details/CommunicationScreen";
import ShowEventOptionsAction from "../components/ShowEventOptionsAction";
import {eventDetail} from "../services/get-event-detail";
import ParticipantsTabNavigation from "./ParticipantsTabNavigation";


const Tab = createBottomTabNavigator();
const EventTabsNavigation = ({route}) => {
    console.log("route", route)
    const data = eventDetail

    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen name="EventDetail" component={EventDetailScreen} options={{headerTitle: data.eventName}}/>
            <Tab.Screen name="Participants" component={ParticipantsTabNavigation} />
            <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
            {/*<Tab.Screen name="Communication" component={CommunicationScreen} />*/}
        </Tab.Navigator>
    );
};

export default EventTabsNavigation;