import * as React from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import styles from "./loader.styles";

interface ILoader {
  size: number;
  open: boolean;
  color: string;
}

function Loader(props: ILoader) {
  const { size, color, open } = props;

  return open ? (
    <View style={styles.boxGeneral}>
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center" }}
        hidesWhenStopped={false}
        size={size}
        color={color}
      />
    </View>
  ) : (
    <></>
  );
}

export default Loader;
