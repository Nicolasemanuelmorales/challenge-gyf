import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  cardText: {
    color: colors.GRIS,
    fontSize: 13,
  },
  cardTitle: {
    fontFamily: "RBold",
    fontSize: 15,
    marginBottom: 10,
  },
});
export default styles;
