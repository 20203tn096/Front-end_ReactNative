import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import ForgotPassword from "../screens/profile/ForgotPassword";
import CreateAccount from "../screens/profile/CreateAccount";
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#131c46" },
      }}
    >
      <Stack.Screen
        name="profileStack"
        component={Profile}
        options={{ title: "Perfil" }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ title: "Contraseña olvidada" }}
      />
       <Stack.Screen
        name="createAccount"
        component={CreateAccount}
        options={{ title: "Crear Cuenta" }}
      />
    </Stack.Navigator>
  );
}
