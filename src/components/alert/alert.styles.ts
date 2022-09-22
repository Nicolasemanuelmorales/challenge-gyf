import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  wrapp: {
    alignSelf: "center",
    top: StatusBar.currentHeight,
    marginTop: 75,
  },
});
export default styles;
