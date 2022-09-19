import React, { useEffect, useState } from "react";
import { Text, RefreshControl, ScrollView, View } from "react-native";
import { Card as CardPaper } from "react-native-paper";
import { useDispatch } from "react-redux";
import colors from "../../../assets/colors";
import Card from "../../models/Card";
import Post from "../../models/Post";
import User from "../../models/User";
import loaderAction from "../../redux/actions/LoaderAction";
import { getPostsList, getUserId } from "../../services/gyf.service";
import shuffle from "../../utils/shuffle";
import styles from "./Home.styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalComentarios from "../../components/Modal/modal.components";
import alertAction from "../../redux/actions/AlertAction";

export default function Home() {
  const [posts, setPosts] = useState<Card[]>([]);
  const [showModal, setShowMNodal] = useState(false);
  const [idPost, setIdPost] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const serchPostsList = () => {
    let listCard: Card[] = [];
    dispatch(loaderAction(true));
    getPostsList()
      .then((resp: Post[]) => {
        shuffle(resp)
          .slice(0, 10)
          .map((item: Post) => {
            getUserId(item.userId)
              .then((usuario: User) => {
                listCard = [
                  ...listCard,
                  {
                    post: { ...item, body: item.body.replace(/\n/g, " ") },
                    user: usuario,
                  },
                ];
                setPosts(listCard);
              })
              .catch(() => {
                dispatch(
                  alertAction({
                    value: true,
                    message: "Error al cargar lista de Post",
                    severity: "error",
                  })
                );
              })
              .finally(() => {
                dispatch(loaderAction(false));
              });
          });
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

  useEffect(serchPostsList, []);

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true),
      wait(1000).then(() => {
        serchPostsList(), setRefreshing(false);
      });
  }, [refreshing]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: 10 }}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={colors.PRINCIPAL}
          colors={[colors.BLANCO]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {posts.map((item, index) => {
        return (
          <CardPaper
            onPress={() => {
              setShowMNodal(true);
              setIdPost(item.post.id);
            }}
            elevation={5}
            style={styles.card}
            key={index}
          >
            <CardPaper.Title
              title={item.post.title}
              subtitle={item.user.name}
            />
            <CardPaper.Content>
              <Text style={styles.cardText}>{item.post.body}</Text>
              <View style={styles.boxFooterCard}>
                <View style={styles.boxUser}>
                  <Icon name={"user-alt"} size={13} color={colors.PRINCIPAL} />
                  <Text style={[styles.cardText, { marginLeft: 5 }]}>
                    {item.user.username}
                  </Text>
                </View>
                <View style={styles.boxWeb}>
                  <Icon name={"globe"} size={13} color={colors.PRINCIPAL} />
                  <Text style={[styles.cardText, { marginLeft: 5 }]}>
                    {item.user.website}
                  </Text>
                </View>
              </View>
            </CardPaper.Content>
          </CardPaper>
        );
      })}
      <ModalComentarios
        idPost={idPost}
        onClose={() => {
          setShowMNodal(false);
        }}
        open={showModal}
      />
    </ScrollView>
  );
}
