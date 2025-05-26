import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import React from 'react';
import {HomeScreen, QuizListScreen} from "../screens";
import {HeaderHomeAddAction} from "../components";
import {ProfileScreen} from "../../auth/screens";
import EditUserProfileAction from "../../auth/components/EditUserProfileAction";
import {TabBarIcon} from "@react-navigation/bottom-tabs/lib/typescript/src/views/TabBarIcon";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={props => ({
            headerRight: () => (
                <HeaderHomeAddAction/>
            ),
        })}>
            <Tab.Screen name="QuizHome" component={HomeScreen} options={{
                title: "Home",
                tabBarIcon: ({focused}) => <Icon name={focused ? 'home' : 'home-outline'} size={20}/>
            }}/>
            <Tab.Screen name="QuizList" component={QuizListScreen} options={{
                title: "Quizzes",
                tabBarIcon: ({focused}) => <Icon name={focused ? 'layers' : 'layers-outline'} size={20}/>
            }}/>
            {/* TODO: User Profile should have edit icon instead of add at the header */}
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                title: "Profile",
                tabBarIcon: ({focused}) => <Icon name={focused ? 'person' : 'person-outline'} size={20}/>,
                headerRight: () => <EditUserProfileAction/>
            }}/>
        </Tab.Navigator>
    );
};

export default HomeTabNavigation;