import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Favoritos from "../screens/Favoritos/Favoritos.screen";

const Stack = createStackNavigator();

export default function FavoritosStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritosScreen" component={Favoritos} />
    </Stack.Navigator>
  );
}
