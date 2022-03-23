<<<<<<< HEAD:siriaci_app/app/navigation/ProfileStack.js
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
=======
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Report from "../../screens/report/Report";
const Stack = createStackNavigator();

export default function ReportStackAdmin() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#131c46'}
            }}
        >
            <Stack.Screen
                name="report"
                component={ Report }
                options={{ title: "Reporte" }}
            />
            
        </Stack.Navigator>
    )
}
>>>>>>> 6bae5ca25f17b2b3f94756740950cef98cfa01e0:siriaci_app/app/navigation/StacksTabAdmin/ReportStackAdmin.js
