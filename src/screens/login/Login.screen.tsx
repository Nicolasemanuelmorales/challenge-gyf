import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import {
  HelperText,
  Switch,
  TextInput as TextInput2,
} from "react-native-paper";
import colors from "../../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Login.styles";
import { useDispatch } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";
import { StatusBar } from "expo-status-bar";

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

  useEffect(() => {
    //dispatch(loaderAction(true));
  }, []);

  return (
    <ScrollView>
      <View style={styles.boxGeneral}>
        <View style={styles.minH}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/gyf.png")}
          />
          <Text style={styles.title}>GYF</Text>
        </View>
        <View style={styles.boxGeneral2}>
          <TextInput2
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
          <TextInput2
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
              <TextInput2.Icon
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
              <Text style={styles.recor}>Recordar</Text>
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
                onPress={() => navigation.navigate("DrawerNavigator")}
                title="Ingresar"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                color={colors.PRINCIPAL}
                onPress={() => navigation.navigate("DrawerNavigator")}
                title="Resgistrar"
              />
            </View>
          </View>

          <Text style={styles.olvPass} onPress={() => {}}>
            ¿Olvidaste tu contraseña?
          </Text>
        </View>
      </View>
      <StatusBar backgroundColor={"transparent"} />
    </ScrollView>
  );
}
