import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React from 'react';
import {HomeScreen, ProfileScreen, QuizListScreen} from "../screens";
import {HeaderHomeAddAction} from "../components";

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={props => ({
            headerRight: () => (
                <HeaderHomeAddAction/>
            ),
        })}>
            <Tab.Screen name="HomeDetails" component={HomeScreen} />
            <Tab.Screen name="QuizList" component={QuizListScreen} />
            {/* TODO: User Profile should have edit icon instead of add at the header */}
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default HomeTabNavigation;