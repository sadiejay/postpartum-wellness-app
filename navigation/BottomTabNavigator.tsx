import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import {
  BottomTabParamList,
  HomeParamList,
  PositivityToolBoxParamList,
  ProfileParamList,
} from '../types';
import HomeScreen from '../screens/HomeScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import ProfileScreen from '../screens/CreateProfileScreen';
import PositivityToolBoxScreen from '../screens/PositivityToolBoxScreen';
import AffirmationScreen from '../screens/AffirmationScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                Platform.OS === 'ios'
                  ? `ios-information-circle${focused ? '' : '-outline'}`
                  : 'md-information-circle'
              }
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="PositivityToolBox"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<PositivityToolBoxParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="PositivityToolBoxScreen"
        component={PositivityToolBoxScreen}
        options={{ headerTitle: 'PositivityToolBox' }}
      />
      <TabTwoStack.Screen
        name="Affirmation"
        component={AffirmationScreen}
      ></TabTwoStack.Screen>
    </TabTwoStack.Navigator>
  );
}
const TabThreeStack = createStackNavigator<ProfileParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </TabThreeStack.Navigator>
  );
}
