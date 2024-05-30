import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { addEvent, addBooking } from "./database";

const Settings = () => {
  // Состояния для хранения настроек пользователя
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [username, setUsername] = useState("");
  const [bookings, setBookings] = useState([]);
  const [bookingTitle, setBookingTitle] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingPrice, setBookingPrice] = useState("");
  const [bookingNumber, setBookingNumber] = useState("");

  // Функция для сохранения настроек
  const saveSettings = () => {
    console.log("Saved settings:", { notificationsEnabled, username });
    Alert.alert("Настройки сохранены", `Настройки сохранены для ${username}`);
    // Дополнительная логика сохранения настроек
  };
  const handleBookEvent = async (event) => {
    await addBooking(event.id);
  };
  // Функция для добавления карточки бронирования
  const addBooking = () => {
    if (
      bookingTitle.trim() === "" ||
      bookingDate.trim() === "" ||
      bookingPrice.trim() === "" ||
      bookingNumber.trim() === ""
    ) {
      Alert.alert("Ошибка", "Все поля бронирования должны быть заполнены");
      return;
    }
    setBookings([
      ...bookings,
      {
        id: Date.now().toString(),
        title: bookingTitle,
        date: bookingDate,
        price: bookingPrice,
        number: bookingNumber,
      },
    ]);

    setBookingTitle("");
    setBookingDate("");
    setBookingPrice("");
    setBookingNumber("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Настройки</Text>
      <View style={styles.setting}>
        <Text style={styles.settingLabel}>Уведомления</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingLabel}>Имя пользователя</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Введите ваше имя"
        />
      </View>
      <Button title="Сохранить настройки" onPress={saveSettings} />

      <Text style={styles.title}>Бронирования</Text>
      <View style={styles.setting}>
        <TextInput
          style={styles.input}
          value={bookingTitle}
          onChangeText={(text) => setBookingTitle(text)}
          placeholder="Название бронирования"
        />
      </View>
      <View style={styles.setting}>
        <TextInput
          style={styles.input}
          value={bookingDate}
          onChangeText={(text) => setBookingDate(text)}
          placeholder="Дата бронирования"
        />
      </View>
      <View style={styles.setting}>
        <TextInput
          style={styles.input}
          value={bookingPrice}
          onChangeText={(text) => setBookingPrice(text)}
          placeholder="Цена бронирования"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.setting}>
        <TextInput
          style={styles.input}
          value={bookingNumber}
          onChangeText={(text) => setBookingNumber(text)}
          placeholder="Количество человек"
          keyboardType="numeric"
        />
      </View>
      <Button title="Добавить бронирование" onPress={addBooking} />
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Дата: {item.date}</Text>
            <Text>Цена: {item.price}</Text>
            <Text>Количество человек: {item.number}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onBook(handleBookEvent)}
            >
              <Text style={styles.buttonText}>Забронировать</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 18,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  bookingCard: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookingTitle: {
    fontSize: 18,
  },
});

export default Settings;
