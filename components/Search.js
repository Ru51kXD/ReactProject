import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";
import EventCard from "./EventCard";
import {
  createTables,
  getEvents,
  addEvent,
  addBooking,
  RemoveALlEvents,
} from "./database";

const Search = ({ navigation }) => {
  const [filter, setFilter] = useState("");

  const [events, setEvents] = useState([]);
  useEffect(() => {
    const initializeEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };
    initializeEvents();
  }, []);

  useEffect(() => {
    const filterEvents = async () => {
      const events = await getEvents(filter);
      setEvents(events);
    };
    const NotFilter = async () => {
      const events = await getEvents();
      setEvents(events);
    };
    if (filter.length > 0) {
      filterEvents();
    } else {
      NotFilter();
    }
  }, [filter]);
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
        <TextInput
          style={styles.input}
          placeholder="Поиск мероприятий"
          value={filter}
          onChangeText={(text) => setFilter(text)}
        />
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventCard event={item} onBook={handleBookEvent} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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
  input: {
    height: 40,
    borderWidth: 5,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Search;
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import {
//   createTables,
//   getEvents,
//   addEvent,
//   addBooking,
//   RemoveALlEvents,
// } from "./database";

// import EventCard from "./EventCard";

// const Search = () => {
//   const handleBookEvent = async (event) => {
//     await addBooking(event.id);
//   };

//   const [appliedFilter, setApplyFilter] = useState(null);
//   const applyFilter = () => {
//     setApplyFilter(filter);
//   };
//   const [filter, setFilter] = useState("");

//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     const initializeEvents = async () => {
//       const events = await getEvents();
//       if (appliedFilter !== null) {
//         const filtredEvents = events.filter((events) =>
//           events.date.toLowerCase().includes(appliedFilter.toLowerCase())
//         );
//         setEvents(filtredEvents);
//       } else {
//         setEvents(events);
//       }
//     };
//     initializeEvents();
//   }, [appliedFilter]);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Поиск мероприятий"
//         value={filter}
//         onChangeText={(text) => setFilter(text)}
//       />
//       <Button title="Поиск" onPress={applyFilter} />
//       <FlatList
//         data={events}
//         renderItem={({ item }) => (
//           <EventCard event={item} onBook={handleBookEvent} />
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default Search;
