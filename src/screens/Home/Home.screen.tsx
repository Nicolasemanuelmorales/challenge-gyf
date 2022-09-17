import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-paper";
import colors from "../../../assets/colors";
import Wrapper from "../../components/wrapper/wrapper.components";
import Post from "../../models/Post";
import { getPostsList } from "../../services/gyf.service";
import styles from "./Home.styles";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const serchPostsList = () => {
    getPostsList().then((resp: Post[]) => {
      setPosts(resp);
    });
  };

  useEffect(serchPostsList, []);

  const renderItem = ({ item }: { item: Post }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text style={[styles.cardText, styles.cardTitle]}>{item.title}</Text>
          <Text style={styles.cardText}>{item.body}</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <Wrapper
      refreshControl={serchPostsList}
      child={
        <>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      }
    />
  );
}
