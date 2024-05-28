import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import {
  createTables,
  getEvents,
  addEvent,
  addBooking,
  RemoveALlEvents,
} from "./database";

import EventCard from "./EventCard";

const Search = ({ onBook }) => {
  useEffect(() => {}, [events]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const [appliedFilter, setApplyFilter] = useState(null);
  const applyFilter = () => {
    setApplyFilter(filter);
    console.log(appliedFilter);
  };
  const [filter, setFilter] = useState("");
  
  const [events, setEvents] = useState([]);
  console.log("privet2");
  useEffect(() => {
    console.log("privet");
    const initializeEvents = async () => {
      const events = await getEvents();
      if (appliedFilter !== null) {
        const filtredEvents = events.filter((events) =>
          events.date.toLowerCase().includes(appliedFilter.toLowerCase())
        );
        console.log(filtredEvents);
        setEvents(filtredEvents);
      } else {
        setEvents(events);
      }
    };
    initializeEvents();
  }, [appliedFilter]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Поиск мероприятий"
        value={filter}
        onChangeText={setFilter}
      />
      <Button title="Поиск" onPress={applyFilter} />
      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard event={item} onBook={onBook} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Search;
