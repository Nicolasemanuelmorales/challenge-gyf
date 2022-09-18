import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headComentarios: {
    backgroundColor: colors.PRINCIPAL,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  closeComentarios: {
    padding: 15,
    position: "absolute",
    right: "2%",
  },
  title: {
    textAlign: "center",
    padding: 15,
    fontFamily: "RBold",
    fontSize: 16,
    color: colors.BLANCO,
    flex: 13,
  },
  modalView: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    width: "100%",
    maxHeight: Dimensions.get("window").height * 0.75,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default styles;
