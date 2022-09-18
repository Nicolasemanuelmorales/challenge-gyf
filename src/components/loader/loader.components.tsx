import * as React from "react";
import { View, ActivityIndicator } from "react-native";
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
        style={styles.actIndicator}
        hidesWhenStopped={false}
        size={size}
        color={color}
        animating={open}
      />
    </View>
  ) : (
    <></>
  );
}

export default Loader;
