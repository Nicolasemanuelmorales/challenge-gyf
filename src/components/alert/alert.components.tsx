import React from "react";
import styles from "./Alert.styles";
import colors from "../../../assets/colors";
import { Snackbar } from "react-native-paper";

interface IProps {
  close: () => void;
  open: boolean;
  message: string;
  severity?: "success" | "error";
}

function Alert(IProps: IProps) {
  const { close, open, message, severity = "success" } = IProps;

  return (
    <Snackbar
      wrapperStyle={styles.wrapp}
      style={{
        backgroundColor:
          severity === "success" ? colors.PRINCIPAL : colors.GRIS,
      }}
      visible={open}
      onDismiss={close}
      duration={2000}
      action={{
        label: "X",
      }}
      theme={{ colors: { accent: colors.BLANCO } }}
      children={message}
    />
  );
}

export default Alert;
