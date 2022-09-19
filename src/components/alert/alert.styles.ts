import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapp: {
    alignSelf: "center",
    top: StatusBar.currentHeight,
    marginTop: 75,
  },
});
export default styles;
