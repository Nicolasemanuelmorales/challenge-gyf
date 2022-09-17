import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  headerDrawer: {
    flexDirection: "row",
    padding: 20,
  },
  headerTitulo: {
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.BLANCO,
  },
  drawerStyle: {
    paddingLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    padding: "4%",
  },
});
export default styles;
