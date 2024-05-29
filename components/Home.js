import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import EventCard from "./EventCard";
import {
  createTables,
  getEvents,
  addEvent,
  addBooking,
  RemoveALlEvents,
} from "./database";

const Home = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const initializeEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };
    initializeEvents();
  }, []);

  useEffect(() => {}, [events]);

  const handleBookEvent = async (event) => {
    await addBooking(event.id);
  };

  return (
    <ImageBackground
      source={require("../assets/Vorota.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Рекомендуемые мероприятия</Text>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventCard event={item} onBook={handleBookEvent} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonmenu}>Поиск мероприятий</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonmenu}>Мои бронирования</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonmenu}>Настройки</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#2c2c2c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonmenu: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Home;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
// import EventCard from './EventCard';
// import EventList from './EventList';

// const Home = ({ navigation, events, onBook }) => {
//   return (
//     <ImageBackground
//       source={require('../assets/Vorota.jpg')}
//       style={styles.backgroundImage}
//     >

//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>Рекомендуемые мероприятия</Text>
//       <FlatList
//         data={events.slice(0, 3)}
//         renderItem={({ item }) => <EventCard event={item} onBook={onBook} />}
//         keyExtractor={(item) => item.id}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')} >
//         <Text style={styles.buttonmenu}>Поиск мероприятий</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
//         <Text style={styles.buttonmenu}>Мои бронирования</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
//         <Text style={styles.buttonmenu}>Настройки</Text>
//       </TouchableOpacity>
//     </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     //backgroundColor: uri('https://i.pinimg.com/originals/33/88/63/3388636e6f2e5984c36494d54bd8830d.jpg')
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: '#2c2c2c',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   buttonmenu: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Заполнение всего пространства
//     justifyContent: 'center',
//   },
// });

// export default Home;
