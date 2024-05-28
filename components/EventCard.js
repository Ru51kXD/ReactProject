import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const EventCard = ({ event, onBook }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text>Date: {event.date}</Text>
      <Text>Number: {event.number}</Text>
      <Text>Price: {event.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onBook(event)}>
        <Text style={styles.buttonText}>Забронировать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default EventCard;
