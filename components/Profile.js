import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getBookings, deleteBooking } from "./database";

const Profile = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {}, [bookings]);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookings = await getBookings();
      setBookings(bookings);
    };
    fetchBookings();
    console.log(bookings);
  }, []);

  const handleDeleteBooking = async (id) => {
    await deleteBooking(id);
    const bookings = await getBookings();
    setBookings(bookings);
  };

  return (
    <View>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Number: {item.number}</Text>
            <Text>Price: {item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDeleteBooking(item.id)}
            >
              <Text style={styles.buttonText}>Отменить</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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

export default Profile;
