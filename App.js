import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import BookingForm from "./components/BookingForm";
import { addEvent } from "./components/database";
const Stack = createStackNavigator();

addEvent("Футбольчик", "2024-01-30", 250, "790");
addEvent("Destroyen", "2024-09-30", 250, "790");
addEvent("American", "2024-10-30", 250, "790");

export default function App() {
  // Предполагая, что у вас есть массив events, который вы хотите передать в Home
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
