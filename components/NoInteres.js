import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';
import Settings from './components/Settings';


const Stack = createStackNavigator();

export default function App() {
  // Предполагая, что у вас есть массив events, который вы хотите передать в Home
  const events = [
    { id: '1', title: 'Футбольный матч', date: '2024-05-21', location: 'Стадион "Авангард"' },
    { id: '2', title: 'Теннисный турнир', date: '2024-06-10', location: 'Теннисный клуб "Легенда"' },
    // { id: '3', title: 'Беговые соревнования', date: '2024-06-25', location: 'Парк им. Горького' },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} events={events} />}
        </Stack.Screen>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
