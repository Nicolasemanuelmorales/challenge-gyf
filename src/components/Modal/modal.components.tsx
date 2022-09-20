import React, { useState, useEffect, useRef } from "react";
import { View, Modal, Text, ScrollView, TextInput } from "react-native";
import colors from "../../../assets/colors";
import styles from "./modal.styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  getCommentsByIdPost,
  saveCommentsByIdPost,
} from "../../services/gyf.service";
import Comment from "../../models/Comment";
import shuffle from "../../utils/shuffle";
import { useDispatch, useSelector } from "react-redux";
import commentAction from "../../redux/actions/CommentAction";
import { IRootState } from "../../redux/reducers/rootReducer";
import alertAction from "../../redux/actions/AlertAction";

interface IModal {
  onClose: () => void;
  open: boolean;
  idPost: number;
}

function ModalComentarios(props: IModal) {
  const { onClose, open, idPost } = props;
  const [comments, setComments] = useState<Comment[]>([]);
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const comentarios = useSelector((state: IRootState) => state.comment.value);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const setDefaultValues = () => {
    setNombre("");
    setComentario("");
    setEmail("");
  };

  const getComments = () => {
    getCommentsByIdPost(idPost)
      .then((resp) => {
        let aux = shuffle(resp);
        if (comentarios.length > 0) {
          const filterArrays = comentarios.filter((item) => {
            return item.postId == idPost;
          });
          setComments([...aux, ...filterArrays]);
        } else {
          setComments(aux);
        }
      })
      .catch(() => {
        dispatch(
          alertAction({
            value: true,
            message: "Error al cargar lista de Post",
            severity: "error",
          })
        );
      });
  };

  useEffect(getComments, [idPost]);

  const sendComment = () => {
    if (nombre !== "" && email !== "" && comentario !== "") {
      saveCommentsByIdPost(
        idPost,
        new Comment({
          postId: idPost,
          name: nombre,
          email: email,
          body: comentario,
        })
      ).then((resp) => {
        dispatch(commentAction([...comentarios, resp]));
        setComments([...comments, resp]);
        setDefaultValues();
        dispatch(
          alertAction({
            value: true,
            message: "Comentario enviado",
          })
        );
      });
    } else {
      dispatch(
        alertAction({
          value: true,
          message: "Campos vacíos",
          severity: "error",
        })
      );
    }
  };

  return comments.length > 0 ? (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          onClose(), setDefaultValues();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headComentarios}>
              <Text style={styles.title}>Comentarios</Text>
              <Icon
                style={styles.closeComentarios}
                name={"times"}
                size={20}
                onPress={() => {
                  onClose(), setDefaultValues();
                }}
                color={colors.BLANCO}
              />
            </View>
            <ScrollView>
              {comments.map((item, index) => {
                return (
                  <View key={index} style={styles.boxComentario}>
                    <View style={{ width: "90%" }}>
                      <Text style={styles.nameUser}>{item.name}</Text>
                      <Text style={styles.comentario}>
                        {item.body.replace(/\n/g, " ")}
                      </Text>
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
              <View style={{ height: 25 }}></View>
            </ScrollView>
            <View style={styles.boxSendComentario}>
              <View style={{ width: "85%" }}>
                <View style={styles.boxNombreEmail}>
                  <TextInput
                    style={styles.inputNombreEmail}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                  />
                  <TextInput
                    style={[styles.inputNombreEmail, styles.borderEmail]}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <TextInput
                  style={styles.inputComentario}
                  placeholder="Añadir Comentario"
                  multiline
                  value={comentario}
                  onChangeText={setComentario}
                />
              </View>
              <View onTouchEnd={sendComment} style={styles.boxEnviar}>
                <Text style={styles.botonEnviar}>Enviar</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  ) : null;
}

export default ModalComentarios;
