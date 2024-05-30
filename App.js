import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { AuthContext, AuthProvider } from "./context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Вход" }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ title: "Регистрация" }}
    />
  </Stack.Navigator>
);

const App = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Новости" }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "Детали" }}
          />
          <Tab.Screen
            name="Logout"
            component={() => null}
            listeners={({ navigation }) => ({
              tabPress: () => {
                logout();
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                });
              },
            })}
            options={{ title: "Выход" }}
          />
        </Tab.Navigator>
      ) : (
        <AuthScreens />
      )}
    </NavigationContainer>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
