import React from "react";
import { View, Modal, Text } from "react-native";
import colors from "../../../assets/colors";
import styles from "./modal.styles";
import Icon from "react-native-vector-icons/FontAwesome5";

interface IModal {
  onClose?: () => void;
  open?: boolean;
}

function ModalComentarios(props: IModal) {
  const { onClose, open = false } = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headComentarios}>
              <Text style={styles.title}>Comentarios</Text>
              <Icon
                style={styles.closeComentarios}
                name={"times"}
                size={20}
                onPress={onClose}
                color={colors.BLANCO}
              />
            </View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 50 }}></View>
            <View style={{ width: "100%", height: 500 }}></View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalComentarios;
