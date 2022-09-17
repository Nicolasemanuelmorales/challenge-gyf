import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.GRIS,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  cardText: {
    color: colors.GRIS,
  },
  cardTitle: {
    fontFamily: "RBold",
  },
});
export default styles;
