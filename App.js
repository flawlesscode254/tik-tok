import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import InboxScreen from './screens/InboxScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createBottomTabNavigator();

const App = () => {

const tabBarOptions = {
    style: {
        backgroundColor: "black",
        paddingBottom: 12,
        paddingTop: 12,
        height: 70
    },
    activeTintColor: "#FFF"
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
        let iconName = "home"

        switch (route.name) {
            case "Home":
                iconName = "home"
                break;
            case "Search":
                iconName = "search"
                break;
            case "Upload":
                iconName = "add-circle-outline"
                break;
            case "Inbox":
                iconName = "chatbubbles"
                break;
            case "Profile":
                iconName = "person"
                break;

            default:
                iconName = "home"
        }

        if (route.name === "Upload"){
               return <Ionicons name="add-circle-outline" size={60} color={focused ? "#ffffff" : "#E9446A"} />
        }
               return  <Ionicons name={iconName} size={24} color={focused ? "#ffffff" : "#666666"} />
    }
  })
  return (
    <NavigationContainer>
      <Stack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Upload" component={AddScreen} options={{
          tabBarLabel: () => null
        }} />
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App