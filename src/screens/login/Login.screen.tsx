import React, { useState, useCallback } from "react";
import { Image, Pressable, ScrollView, Text, View, Button } from "react-native";
import { HelperText, Switch, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Login.styles";
import { useDispatch } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect } from "@react-navigation/native";

interface IProps {
  navigation: any;
}

export default function Login(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [recordarme, setRecordarme] = useState(false);
  const dispatch = useDispatch();

  const setValuesDeault = () => {
    setPassError("");
    setEmailError("");
    setEmail("");
    setPass("");
  };
  useFocusEffect(
    useCallback(() => {
      setValuesDeault();
    }, [])
  );

  const ValidInputs = () => {
    if (pass === "") {
      setPassError("Campo vacío, indique cualquier valor");
    } else {
      setPassError("");
    }
    if (email === "") {
      setEmailError("Campo vacío, indique cualquier valor");
    } else {
      setEmailError("");
    }

    if (passError === "" && emailError === "" && pass !== "" && email !== "") {
      dispatch(loaderAction(true));
      setTimeout(() => {
        if (passError === "" && emailError === "") {
          navigation.navigate("DrawerNavigator");
        }
        dispatch(loaderAction(false));
      }, 1000);
    }
  };

  return (
    <ScrollView>
      <View style={styles.boxGeneral}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/gyf.png")}
          />
          <Text style={styles.title}>GYF</Text>
        </View>
        <View style={styles.boxGeneralCombo}>
          <TextInput
            theme={{
              colors: {
                primary: colors.PRINCIPAL,
                background: colors.BLANCO,
                error: "red",
                text: emailError === "" ? "#000" : "red",
              },
            }}
            error={emailError === "" ? false : true}
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            label="Email"
          />
          <HelperText
            style={{
              color: "red",
            }}
            type="error"
            visible={emailError === "" ? false : true}
          >
            {emailError}
          </HelperText>
          <TextInput
            theme={{
              colors: {
                primary: colors.PRINCIPAL,
                background: colors.BLANCO,
                error: "red",
                text: passError === "" ? "#000" : "red",
              },
            }}
            mode="outlined"
            label="Contraseña"
            value={pass}
            error={passError === "" ? false : true}
            onChangeText={setPass}
            secureTextEntry={hidePass}
            right={
              <TextInput.Icon
                name={() => (
                  <Pressable onTouchStart={() => setHidePass(!hidePass)}>
                    <Icon
                      name={hidePass ? "eye-slash" : "eye"}
                      size={20}
                      color={passError === "" ? "#757575" : "red"}
                    />
                  </Pressable>
                )}
              />
            }
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <HelperText
              style={{
                color: "red",
              }}
              type="error"
              visible={passError === "" ? false : true}
            >
              {passError}
            </HelperText>
            <View style={styles.boxRecordar}>
              <Text style={styles.recordar}>Recordar</Text>
              <Switch
                value={recordarme}
                onTouchStart={() => {
                  setRecordarme(!recordarme);
                }}
                color={colors.PRINCIPAL}
              />
            </View>
          </View>
          <View style={styles.boxBoton}>
            <View style={styles.ingresar}>
              <Button
                color={colors.PRINCIPAL}
                onPress={ValidInputs}
                title="Ingresar"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                color={colors.PRINCIPAL}
                onPress={ValidInputs}
                title="Registrar"
              />
            </View>
          </View>

          <Text style={styles.olvPass}>¿Olvidaste tu contraseña?</Text>
        </View>
      </View>
      <StatusBar backgroundColor={"transparent"} />
    </ScrollView>
  );
}
