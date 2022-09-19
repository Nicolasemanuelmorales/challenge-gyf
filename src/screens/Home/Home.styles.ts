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
  boxFooterCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  boxUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  boxWeb: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default styles;
