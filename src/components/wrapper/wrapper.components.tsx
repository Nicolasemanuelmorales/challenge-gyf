import * as React from "react";
import { RefreshControl, View, ScrollView } from "react-native";
import colors from "../../../assets/colors";
import styles from "./wrapper.styles";

interface ILoader {
  child: JSX.Element;
  refreshControl?: () => void;
}

function Wrapper(props: ILoader) {
  const { child, refreshControl } = props;

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true),
      wait(1000).then(() => {
        refreshControl ? refreshControl() : null, setRefreshing(false);
      });
  }, [refreshing]);

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      refreshControl={
        refreshControl ? (
          <RefreshControl
            progressBackgroundColor={colors.PRINCIPAL}
            colors={[colors.BLANCO]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        ) : undefined
      }
    >
      {child}
    </ScrollView>
  );
}

export default Wrapper;
