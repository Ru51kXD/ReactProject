import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Спортивные мероприятия</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200EE",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
