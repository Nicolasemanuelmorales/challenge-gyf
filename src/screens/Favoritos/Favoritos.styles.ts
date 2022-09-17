import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  wrapper: {
    marginBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  boxImg: {
    width: "47.5%",
    height: 200,
    backgroundColor: colors.PRINCIPAL,
    marginBottom: "5%",
  },
  boxText: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});
export default styles;
