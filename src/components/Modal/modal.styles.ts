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
    maxHeight: Dimensions.get("window").height * 0.5,
  },
  nameUser: {
    fontFamily: "RBold",
    color: colors.GRIS,
    fontSize: 15,
  },
  comentario: {
    fontSize: 13,
  },
  boxComentario: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    margingVertical: 10,
  },
  inputNombreEmail: {
    backgroundColor: colors.BLANCO,
    height: 40,
    padding: 5,
    width: "50%",
  },
  inputComentario: {
    backgroundColor: colors.BLANCO,
    height: 50,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderColor: colors.PRINCIPAL,
  },
  borderEmail: {
    borderLeftWidth: 1,
    borderColor: colors.PRINCIPAL,
  },
  boxSendComentario: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.PRINCIPAL,
  },
  boxNombreEmail: {
    display: "flex",
    flexDirection: "row",
  },
  botonEnviar: {
    flex: 1,
    textAlign: "center",
    color: colors.BLANCO,
    fontFamily: "RBold",
    justifyContent: "center",
    marginTop: 38,
  },
  boxEnviar: {
    backgroundColor: colors.PRINCIPAL,
    flex: 1,
    alignItems: "center",
  },
});
export default styles;
