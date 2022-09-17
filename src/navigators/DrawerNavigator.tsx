import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Menu from "../components/menu/menu.components";
import HomeStackNavigator from "./HomeStackNavigator";
import FavoritosStackNavigator from "./FavoritosStackNavigator";
import colors from "../../assets/colors";
import Loader from "../components/loader/loader.components";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.GRIS_OSCURO,
    },
  };

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerTintColor: "#00aeef",
            headerStyle: { backgroundColor: colors.GRIS },
            drawerStyle: { backgroundColor: colors.GRIS },
          }}
          drawerContent={(props) => <Menu {...props} />}
        >
          <Drawer.Screen name="Inicio" component={HomeStackNavigator} />
          <Drawer.Screen name="Favoritos" component={FavoritosStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Loader open={false} size={50} color={colors.PRINCIPAL} />
    </>
  );
}
