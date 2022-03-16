import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Profile from "../screens/Profile";
const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#131c46'}
            }}
        >
            <Stack.Screen
                name="profileStack"
                component={ Profile }
                options={{ title: "Perfil" }}
            />
            

        </Stack.Navigator>
    )
}