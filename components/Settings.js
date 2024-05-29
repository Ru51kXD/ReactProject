import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Button,
  Alert,
} from "react-native";

const Settings = () => {
  // Состояния для хранения настроек пользователя
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [username, setUsername] = useState("");

  // Функция для сохранения настроек
  const saveSettings = () => {
    "Saved settings:", { notificationsEnabled, username };
    alert("Настройки сохранены для " + username);
    // Дополнительная логика сохранения настроек
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
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default Settings;
