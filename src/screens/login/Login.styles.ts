import { StatusBar, StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxGeneral: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: StatusBar.currentHeight,
  },
  boxLogo: {
    marginVertical: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  img: {
    width: 75,
    height: 75,
    alignSelf: "center",
  },
  title: {
    color: colors.GRIS,
    textAlign: "center",
    marginTop: -10,
    fontSize: 75,
    fontFamily: "RBold",
    alignSelf: "center",
  },
  boxGeneralCombo: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  boxBoton: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxRecordar: {
    flexDirection: "row",
    alignItems: "center",
  },
  recordar: {
    fontSize: 16,
    marginRight: 2,
    color: "#757575",
  },
  ingresar: {
    flex: 1,
    marginRight: 20,
  },

  olvPass: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#757575",
  },
});
export default styles;
