import React, { useState, useEffect } from "react";
import { View, Modal, Text, ScrollView, TextInput } from "react-native";
import colors from "../../../assets/colors";
import styles from "./modal.styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getCommentsByIdPost } from "../../services/gyf.service";
import Comment from "../../models/Comment";
import shuffle from "../../utils/shuffle";

interface IModal {
  onClose: () => void;
  open: boolean;
  idPost: number;
}

function ModalComentarios(props: IModal) {
  const { onClose, open, idPost } = props;
  const [comments, setComments] = useState<Comment[]>([]);
  const [like, setLike] = useState(false);

  const getComments = () => {
    setComments([]);
    getCommentsByIdPost(idPost).then((resp) => {
      let aux = shuffle(resp);
      setComments(aux);
    });
  };

  useEffect(getComments, [idPost]);

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
            <ScrollView>
              {comments.map((item, index) => {
                return (
                  <View key={index} style={styles.boxComentario}>
                    <View style={{ width: "90%" }}>
                      <Text style={styles.nameUser}>{item.name}</Text>
                      <Text>{item.body}</Text>
                    </View>
                    <Icon
                      style={{ marginLeft: 10 }}
                      name={"heart"}
                      size={20}
                      solid={like}
                      onPress={() => {
                        setLike(!like);
                      }}
                      color={colors.PRINCIPAL}
                    />
                  </View>
                );
              })}
            </ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.PRINCIPAL,
                margin: 0,
                borderTopWidth: 1,
                borderTopColor: colors.PRINCIPAL,
              }}
            >
              <View style={{ width: "85%" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextInput
                    style={styles.inputNombreEmail}
                    placeholder="Nombre"
                  />
                  <TextInput
                    style={[styles.inputNombreEmail, styles.borderEmail]}
                    placeholder="Email"
                  />
                </View>
                <TextInput
                  style={styles.inputComentario}
                  placeholder="Añadir Comentario"
                  multiline
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: colors.BLANCO,
                  fontFamily: "RBold",
                }}
              >
                Enviar
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalComentarios;
