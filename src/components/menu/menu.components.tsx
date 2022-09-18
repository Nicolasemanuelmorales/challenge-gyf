import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./menu.styles";
import colors from "../../../assets/colors";
interface IProps {
  navigation: any;
}

function DrawerNavigatorContent(props: IProps) {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...navigation}>
      <Drawer.Section>
        <View style={styles.headerDrawer}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/gyf.png")}
          />
          <Text style={styles.headerTitulo}>Challenge GYF</Text>
        </View>
      </Drawer.Section>
      <Drawer.Item
        label={<Text style={{ color: colors.GRIS }}>Inicio</Text>}
        onPress={() => {
          navigation.reset({
            routes: [{ name: "Inicio" }],
          });
        }}
        style={styles.drawerStyle}
        icon={() => <Icon name={"home"} size={20} color={colors.PRINCIPAL} />}
      />
      <Drawer.Item
        label={<Text style={{ color: colors.GRIS }}>Cerrar sesión</Text>}
        onPress={() => {
          navigation.reset({
            routes: [{ name: "Login" }],
          });
        }}
        style={styles.drawerStyle}
        icon={() => (
          <Icon name={"sign-out-alt"} size={22} color={colors.PRINCIPAL} />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerNavigatorContent;
