import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React from 'react';
import {HomeScreen, ProfileScreen, QuizListScreen} from "../screens";

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="QuizList" component={QuizListScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default HomeTabNavigation;