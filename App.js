import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import BookingForm from "./components/BookingForm";
import { addEvent, createTables, RemoveALlEvents } from "./components/database";

const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    async function fetchData() {
      await createTables();
      // await RemoveALlEvents();
      await addEvent("Футбольчик", "2024-01-30", 250, "790");
      await addEvent("Destroyen", "2024-09-30", 250, "790");
      await addEvent("American", "2024-10-30", 250, "790");
    }
    fetchData();
  }, []);
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
