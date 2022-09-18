import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../components/menu/menu.components";
import HomeStackNavigator from "./HomeStackNavigator";
import colors from "../../assets/colors";
import { StatusBar } from "expo-status-bar";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerTintColor: colors.BLANCO,
          headerStyle: { backgroundColor: colors.PRINCIPAL },
          drawerContentStyle: { backgroundColor: "red" },
        }}
        drawerContent={(props) => <Menu {...props} />}
      >
        <Drawer.Screen name="Inicio" component={HomeStackNavigator} />
      </Drawer.Navigator>
      <StatusBar backgroundColor={colors.PRINCIPAL} translucent />
    </>
  );
}
