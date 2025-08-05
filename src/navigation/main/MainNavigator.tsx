import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomNavigation } from '../../components/BottomNavigation/BottomNavigation';
import { ChatRoomListScreen } from '../../screens/ChatRoomListScreen/ChatRoomListScreen';
import { HomeScreen } from '../../screens/HomeScreen/HomeScreen';
import { SettingsScreen } from '../../screens/SettingScreen/SettingScreen';
import ChatStack from './chat/ChatStack';



const Tab = createBottomTabNavigator();
// 👇 밖에 따로 선언
function renderBottomNavigation(props: BottomTabBarProps) {
    return <BottomNavigation {...props} />;
}
export function MainNavigator() {
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={renderBottomNavigation}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Chat" component={ChatStack} />
                <Tab.Screen name="Profile" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
