import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleRegister = () => {
    // Проверяем, что email и password не пустые
    if (!email || !password) {
      Alert.alert("Ошибка", "Введите email и пароль");
      return;
    }

    // Проверяем, что email содержит символ @
    if (!email.includes("@")) {
      Alert.alert("Ошибка", "Неверный формат email");
      return;
    }

    // Создаем нового пользователя
    const newUser = { email, password };

    // Сохраняем пользователя в локальном хранилище
    saveUser(newUser);

    // Логиним пользователя
    login(newUser);
  };

  const saveUser = async (user) => {
    try {
      // Получаем текущих пользователей из локального хранилища
      const existingUsers = await AsyncStorage.getItem("users");
      let users = [];
      if (existingUsers) {
        users = JSON.parse(existingUsers);
      }

      // Проверяем, нет ли уже пользователя с таким email
      const existingUser = users.find((u) => u.email === user.email);
      if (existingUser) {
        Alert.alert("Ошибка", "Пользователь с таким email уже зарегистрирован");
        return;
      }

      // Добавляем нового пользователя в массив
      users.push(user);

      // Сохраняем обновленный массив пользователей в локальном хранилище
      await AsyncStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      console.error("Ошибка сохранения пользователя:", error);
      Alert.alert("Ошибка", "Произошла ошибка при регистрации");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Зарегистрироваться" onPress={handleRegister} />
      <View style={styles.switchContainer}>
        <Text>Уже есть аккаунт?</Text>
        <Button title="Войдите" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
});

export default RegisterScreen;
